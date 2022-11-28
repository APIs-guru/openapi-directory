import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}

export enum GetAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAcceptReservedNodeExchangeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptReservedNodeExchangeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeId" })
  reservedNodeId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetReservedNodeOfferingId" })
  targetReservedNodeOfferingId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptReservedNodeExchangeVersionEnum;
}


export class GetAcceptReservedNodeExchangeHeaders extends SpeakeasyBase {
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


export class GetAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAcceptReservedNodeExchangeQueryParams;

  @SpeakeasyMetadata()
  headers: GetAcceptReservedNodeExchangeHeaders;
}


export class GetAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
