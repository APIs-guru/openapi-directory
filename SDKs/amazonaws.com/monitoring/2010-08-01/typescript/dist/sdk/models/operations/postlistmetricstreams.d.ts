import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListMetricStreamsActionEnum {
    ListMetricStreams = "ListMetricStreams"
}
export declare enum PostListMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostListMetricStreamsQueryParams extends SpeakeasyBase {
    action: PostListMetricStreamsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostListMetricStreamsVersionEnum;
}
export declare class PostListMetricStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListMetricStreamsRequest extends SpeakeasyBase {
    queryParams: PostListMetricStreamsQueryParams;
    headers: PostListMetricStreamsHeaders;
    request?: Uint8Array;
}
export declare class PostListMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
