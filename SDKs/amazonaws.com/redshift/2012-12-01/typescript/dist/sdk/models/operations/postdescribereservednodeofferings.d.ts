import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReservedNodeOfferingsActionEnum {
    DescribeReservedNodeOfferings = "DescribeReservedNodeOfferings"
}
export declare enum PostDescribeReservedNodeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeReservedNodeOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedNodeOfferingsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReservedNodeOfferingsVersionEnum;
}
export declare class PostDescribeReservedNodeOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedNodeOfferingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedNodeOfferingsQueryParams;
    headers: PostDescribeReservedNodeOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedNodeOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
