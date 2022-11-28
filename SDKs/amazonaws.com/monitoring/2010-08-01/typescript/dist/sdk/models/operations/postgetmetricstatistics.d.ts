import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetMetricStatisticsActionEnum {
    GetMetricStatistics = "GetMetricStatistics"
}
export declare enum PostGetMetricStatisticsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostGetMetricStatisticsQueryParams extends SpeakeasyBase {
    action: PostGetMetricStatisticsActionEnum;
    version: PostGetMetricStatisticsVersionEnum;
}
export declare class PostGetMetricStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetMetricStatisticsRequest extends SpeakeasyBase {
    queryParams: PostGetMetricStatisticsQueryParams;
    headers: PostGetMetricStatisticsHeaders;
    request?: Uint8Array;
}
export declare class PostGetMetricStatisticsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
