import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostModifyClusterIamRolesActionEnum {
    ModifyClusterIamRoles = "ModifyClusterIamRoles"
}

export enum PostModifyClusterIamRolesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostModifyClusterIamRolesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyClusterIamRolesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyClusterIamRolesVersionEnum;
}


export class PostModifyClusterIamRolesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostModifyClusterIamRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostModifyClusterIamRolesQueryParams;

  @SpeakeasyMetadata()
  headers: PostModifyClusterIamRolesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyClusterIamRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
