import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReservedDbInstancesOfferingsActionEnum {
    DescribeReservedDbInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}
export declare enum PostDescribeReservedDbInstancesOfferingsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostDescribeReservedDbInstancesOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedDbInstancesOfferingsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReservedDbInstancesOfferingsVersionEnum;
}
export declare class PostDescribeReservedDbInstancesOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedDbInstancesOfferingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedDbInstancesOfferingsQueryParams;
    headers: PostDescribeReservedDbInstancesOfferingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedDbInstancesOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
