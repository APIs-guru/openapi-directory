import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPurgeQueueActionEnum {
    PurgeQueue = "PurgeQueue"
}
export declare enum PostPurgeQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostPurgeQueueQueryParams extends SpeakeasyBase {
    action: PostPurgeQueueActionEnum;
    version: PostPurgeQueueVersionEnum;
}
export declare class PostPurgeQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPurgeQueueRequest extends SpeakeasyBase {
    queryParams: PostPurgeQueueQueryParams;
    headers: PostPurgeQueueHeaders;
    request?: Uint8Array;
}
export declare class PostPurgeQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
