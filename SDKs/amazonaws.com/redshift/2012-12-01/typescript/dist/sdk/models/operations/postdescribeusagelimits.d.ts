import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeUsageLimitsActionEnum {
    DescribeUsageLimits = "DescribeUsageLimits"
}
export declare enum PostDescribeUsageLimitsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeUsageLimitsQueryParams extends SpeakeasyBase {
    action: PostDescribeUsageLimitsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeUsageLimitsVersionEnum;
}
export declare class PostDescribeUsageLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeUsageLimitsRequest extends SpeakeasyBase {
    queryParams: PostDescribeUsageLimitsQueryParams;
    headers: PostDescribeUsageLimitsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeUsageLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
