import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeleteClusterSecurityGroupActionEnum {
    DeleteClusterSecurityGroup = "DeleteClusterSecurityGroup"
}

export enum PostDeleteClusterSecurityGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDeleteClusterSecurityGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteClusterSecurityGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteClusterSecurityGroupVersionEnum;
}


export class PostDeleteClusterSecurityGroupHeaders extends SpeakeasyBase {
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


export class PostDeleteClusterSecurityGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeleteClusterSecurityGroupQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeleteClusterSecurityGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteClusterSecurityGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
