import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAuthorizeDataShareActionEnum {
    AuthorizeDataShare = "AuthorizeDataShare"
}

export enum GetAuthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAuthorizeDataShareQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAuthorizeDataShareActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConsumerIdentifier" })
  consumerIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" })
  dataShareArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAuthorizeDataShareVersionEnum;
}


export class GetAuthorizeDataShareHeaders extends SpeakeasyBase {
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


export class GetAuthorizeDataShareRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuthorizeDataShareQueryParams;

  @Metadata()
  headers: GetAuthorizeDataShareHeaders;
}


export class GetAuthorizeDataShareResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
