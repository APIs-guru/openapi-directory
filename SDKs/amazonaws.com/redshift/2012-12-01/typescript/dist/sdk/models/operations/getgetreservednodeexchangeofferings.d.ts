import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetReservedNodeExchangeOfferingsActionEnum {
    GetReservedNodeExchangeOfferings = "GetReservedNodeExchangeOfferings"
}
export declare enum GetGetReservedNodeExchangeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetGetReservedNodeExchangeOfferingsQueryParams extends SpeakeasyBase {
    action: GetGetReservedNodeExchangeOfferingsActionEnum;
    marker?: string;
    maxRecords?: number;
    reservedNodeId: string;
    version: GetGetReservedNodeExchangeOfferingsVersionEnum;
}
export declare class GetGetReservedNodeExchangeOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetReservedNodeExchangeOfferingsRequest extends SpeakeasyBase {
    queryParams: GetGetReservedNodeExchangeOfferingsQueryParams;
    headers: GetGetReservedNodeExchangeOfferingsHeaders;
}
export declare class GetGetReservedNodeExchangeOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
