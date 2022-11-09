import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}

export enum PostAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostAcceptReservedNodeExchangeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAcceptReservedNodeExchangeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAcceptReservedNodeExchangeVersionEnum;
}


export class PostAcceptReservedNodeExchangeHeaders extends SpeakeasyBase {
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


export class PostAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAcceptReservedNodeExchangeQueryParams;

  @Metadata()
  headers: PostAcceptReservedNodeExchangeHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
