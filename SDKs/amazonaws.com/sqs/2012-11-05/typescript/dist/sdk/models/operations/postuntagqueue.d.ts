import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUntagQueueActionEnum {
    UntagQueue = "UntagQueue"
}
export declare enum PostUntagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostUntagQueueQueryParams extends SpeakeasyBase {
    action: PostUntagQueueActionEnum;
    version: PostUntagQueueVersionEnum;
}
export declare class PostUntagQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagQueueRequest extends SpeakeasyBase {
    queryParams: PostUntagQueueQueryParams;
    headers: PostUntagQueueHeaders;
    request?: Uint8Array;
}
export declare class PostUntagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
