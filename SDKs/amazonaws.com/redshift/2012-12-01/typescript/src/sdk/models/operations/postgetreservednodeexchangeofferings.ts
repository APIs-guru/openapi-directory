import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetReservedNodeExchangeOfferingsActionEnum {
    GetReservedNodeExchangeOfferings = "GetReservedNodeExchangeOfferings"
}

export enum PostGetReservedNodeExchangeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostGetReservedNodeExchangeOfferingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetReservedNodeExchangeOfferingsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetReservedNodeExchangeOfferingsVersionEnum;
}


export class PostGetReservedNodeExchangeOfferingsHeaders extends SpeakeasyBase {
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


export class PostGetReservedNodeExchangeOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetReservedNodeExchangeOfferingsQueryParams;

  @Metadata()
  headers: PostGetReservedNodeExchangeOfferingsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetReservedNodeExchangeOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
