import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}

export enum PostAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostAcceptReservedNodeExchangeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAcceptReservedNodeExchangeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAcceptReservedNodeExchangeVersionEnum;
}


export class PostAcceptReservedNodeExchangeHeaders extends SpeakeasyBase {
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


export class PostAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAcceptReservedNodeExchangeQueryParams;

  @SpeakeasyMetadata()
  headers: PostAcceptReservedNodeExchangeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
