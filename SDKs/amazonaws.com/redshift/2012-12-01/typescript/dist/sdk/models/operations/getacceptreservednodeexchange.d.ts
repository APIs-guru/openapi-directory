import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}
export declare enum GetAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAcceptReservedNodeExchangeQueryParams extends SpeakeasyBase {
    action: GetAcceptReservedNodeExchangeActionEnum;
    reservedNodeId: string;
    targetReservedNodeOfferingId: string;
    version: GetAcceptReservedNodeExchangeVersionEnum;
}
export declare class GetAcceptReservedNodeExchangeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
    queryParams: GetAcceptReservedNodeExchangeQueryParams;
    headers: GetAcceptReservedNodeExchangeHeaders;
}
export declare class GetAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
