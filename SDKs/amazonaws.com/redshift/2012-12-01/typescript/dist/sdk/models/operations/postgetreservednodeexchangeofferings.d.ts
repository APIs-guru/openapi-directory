import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetReservedNodeExchangeOfferingsActionEnum {
    GetReservedNodeExchangeOfferings = "GetReservedNodeExchangeOfferings"
}
export declare enum PostGetReservedNodeExchangeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostGetReservedNodeExchangeOfferingsQueryParams extends SpeakeasyBase {
    action: PostGetReservedNodeExchangeOfferingsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostGetReservedNodeExchangeOfferingsVersionEnum;
}
export declare class PostGetReservedNodeExchangeOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetReservedNodeExchangeOfferingsRequest extends SpeakeasyBase {
    queryParams: PostGetReservedNodeExchangeOfferingsQueryParams;
    headers: PostGetReservedNodeExchangeOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostGetReservedNodeExchangeOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
