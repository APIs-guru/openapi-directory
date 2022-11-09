import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRevokeDbSecurityGroupIngressActionEnum {
    RevokeDbSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}

export enum PostRevokeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class PostRevokeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRevokeDbSecurityGroupIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRevokeDbSecurityGroupIngressVersionEnum;
}


export class PostRevokeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostRevokeDbSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRevokeDbSecurityGroupIngressQueryParams;

  @Metadata()
  headers: PostRevokeDbSecurityGroupIngressHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRevokeDbSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
