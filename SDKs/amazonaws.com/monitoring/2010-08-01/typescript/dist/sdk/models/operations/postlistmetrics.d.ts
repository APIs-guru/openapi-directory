import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListMetricsActionEnum {
    ListMetrics = "ListMetrics"
}
export declare enum PostListMetricsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostListMetricsQueryParams extends SpeakeasyBase {
    action: PostListMetricsActionEnum;
    nextToken?: string;
    version: PostListMetricsVersionEnum;
}
export declare class PostListMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListMetricsRequest extends SpeakeasyBase {
    queryParams: PostListMetricsQueryParams;
    headers: PostListMetricsHeaders;
    request?: Uint8Array;
}
export declare class PostListMetricsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
