import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}

export enum GetAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAcceptReservedNodeExchangeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptReservedNodeExchangeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeId" })
  reservedNodeId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetReservedNodeOfferingId" })
  targetReservedNodeOfferingId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptReservedNodeExchangeVersionEnum;
}


export class GetAcceptReservedNodeExchangeHeaders extends SpeakeasyBase {
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


export class GetAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAcceptReservedNodeExchangeQueryParams;

  @Metadata()
  headers: GetAcceptReservedNodeExchangeHeaders;
}


export class GetAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
