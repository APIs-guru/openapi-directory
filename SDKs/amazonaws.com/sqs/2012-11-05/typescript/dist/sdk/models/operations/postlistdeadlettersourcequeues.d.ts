import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListDeadLetterSourceQueuesActionEnum {
    ListDeadLetterSourceQueues = "ListDeadLetterSourceQueues"
}
export declare enum PostListDeadLetterSourceQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostListDeadLetterSourceQueuesQueryParams extends SpeakeasyBase {
    action: PostListDeadLetterSourceQueuesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostListDeadLetterSourceQueuesVersionEnum;
}
export declare class PostListDeadLetterSourceQueuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListDeadLetterSourceQueuesRequest extends SpeakeasyBase {
    queryParams: PostListDeadLetterSourceQueuesQueryParams;
    headers: PostListDeadLetterSourceQueuesHeaders;
    request?: Uint8Array;
}
export declare class PostListDeadLetterSourceQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
