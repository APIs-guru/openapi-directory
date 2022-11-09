import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetReservedNodeExchangeOfferingsActionEnum {
    GetReservedNodeExchangeOfferings = "GetReservedNodeExchangeOfferings"
}

export enum GetGetReservedNodeExchangeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetGetReservedNodeExchangeOfferingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetReservedNodeExchangeOfferingsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeId" })
  reservedNodeId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetReservedNodeExchangeOfferingsVersionEnum;
}


export class GetGetReservedNodeExchangeOfferingsHeaders extends SpeakeasyBase {
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


export class GetGetReservedNodeExchangeOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetReservedNodeExchangeOfferingsQueryParams;

  @Metadata()
  headers: GetGetReservedNodeExchangeOfferingsHeaders;
}


export class GetGetReservedNodeExchangeOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
