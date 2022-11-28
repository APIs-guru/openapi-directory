import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeUsageLimitsActionEnum {
    DescribeUsageLimits = "DescribeUsageLimits"
}
export declare enum GetDescribeUsageLimitsFeatureTypeEnum {
    Spectrum = "spectrum",
    ConcurrencyScaling = "concurrency-scaling"
}
export declare enum GetDescribeUsageLimitsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeUsageLimitsQueryParams extends SpeakeasyBase {
    action: GetDescribeUsageLimitsActionEnum;
    clusterIdentifier?: string;
    featureType?: GetDescribeUsageLimitsFeatureTypeEnum;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    usageLimitId?: string;
    version: GetDescribeUsageLimitsVersionEnum;
}
export declare class GetDescribeUsageLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeUsageLimitsRequest extends SpeakeasyBase {
    queryParams: GetDescribeUsageLimitsQueryParams;
    headers: GetDescribeUsageLimitsHeaders;
}
export declare class GetDescribeUsageLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
