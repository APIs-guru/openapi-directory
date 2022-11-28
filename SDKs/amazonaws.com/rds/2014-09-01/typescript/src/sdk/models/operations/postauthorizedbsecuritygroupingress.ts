import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAuthorizeDbSecurityGroupIngressActionEnum {
    AuthorizeDbSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}

export enum PostAuthorizeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class PostAuthorizeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAuthorizeDbSecurityGroupIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAuthorizeDbSecurityGroupIngressVersionEnum;
}


export class PostAuthorizeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class PostAuthorizeDbSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAuthorizeDbSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: PostAuthorizeDbSecurityGroupIngressHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAuthorizeDbSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
