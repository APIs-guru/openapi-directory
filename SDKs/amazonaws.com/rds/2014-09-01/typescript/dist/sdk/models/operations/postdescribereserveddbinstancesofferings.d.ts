import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReservedDbInstancesOfferingsActionEnum {
    DescribeReservedDbInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}
export declare enum PostDescribeReservedDbInstancesOfferingsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeReservedDbInstancesOfferingsQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedDbInstancesOfferingsActionEnum;
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
