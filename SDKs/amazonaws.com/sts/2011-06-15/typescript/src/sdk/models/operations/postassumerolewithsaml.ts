import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAssumeRoleWithSamlActionEnum {
    AssumeRoleWithSaml = "AssumeRoleWithSAML"
}

export enum PostAssumeRoleWithSamlVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class PostAssumeRoleWithSamlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssumeRoleWithSamlActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssumeRoleWithSamlVersionEnum;
}


export class PostAssumeRoleWithSamlHeaders extends SpeakeasyBase {
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


export class PostAssumeRoleWithSamlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAssumeRoleWithSamlQueryParams;

  @SpeakeasyMetadata()
  headers: PostAssumeRoleWithSamlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssumeRoleWithSamlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
