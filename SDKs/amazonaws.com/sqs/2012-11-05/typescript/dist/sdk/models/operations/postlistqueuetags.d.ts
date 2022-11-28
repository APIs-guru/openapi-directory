import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListQueueTagsActionEnum {
    ListQueueTags = "ListQueueTags"
}
export declare enum PostListQueueTagsVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostListQueueTagsQueryParams extends SpeakeasyBase {
    action: PostListQueueTagsActionEnum;
    version: PostListQueueTagsVersionEnum;
}
export declare class PostListQueueTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListQueueTagsRequest extends SpeakeasyBase {
    queryParams: PostListQueueTagsQueryParams;
    headers: PostListQueueTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListQueueTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
