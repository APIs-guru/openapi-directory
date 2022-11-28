import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListQueuesActionEnum {
    ListQueues = "ListQueues"
}
export declare enum PostListQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostListQueuesQueryParams extends SpeakeasyBase {
    action: PostListQueuesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostListQueuesVersionEnum;
}
export declare class PostListQueuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListQueuesRequest extends SpeakeasyBase {
    queryParams: PostListQueuesQueryParams;
    headers: PostListQueuesHeaders;
    request?: Uint8Array;
}
export declare class PostListQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
