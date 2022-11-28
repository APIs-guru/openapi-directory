import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeReservedNodeOfferingsActionEnum {
    DescribeReservedNodeOfferings = "DescribeReservedNodeOfferings"
}
export declare enum GetDescribeReservedNodeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeReservedNodeOfferingsQueryParams extends SpeakeasyBase {
    action: GetDescribeReservedNodeOfferingsActionEnum;
    marker?: string;
    maxRecords?: number;
    reservedNodeOfferingId?: string;
    version: GetDescribeReservedNodeOfferingsVersionEnum;
}
export declare class GetDescribeReservedNodeOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReservedNodeOfferingsRequest extends SpeakeasyBase {
    queryParams: GetDescribeReservedNodeOfferingsQueryParams;
    headers: GetDescribeReservedNodeOfferingsHeaders;
}
export declare class GetDescribeReservedNodeOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
