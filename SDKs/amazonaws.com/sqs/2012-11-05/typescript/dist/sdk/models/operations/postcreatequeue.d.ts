import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateQueueActionEnum {
    CreateQueue = "CreateQueue"
}
export declare enum PostCreateQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostCreateQueueQueryParams extends SpeakeasyBase {
    action: PostCreateQueueActionEnum;
    version: PostCreateQueueVersionEnum;
}
export declare class PostCreateQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateQueueRequest extends SpeakeasyBase {
    queryParams: PostCreateQueueQueryParams;
    headers: PostCreateQueueHeaders;
    request?: Uint8Array;
}
export declare class PostCreateQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
