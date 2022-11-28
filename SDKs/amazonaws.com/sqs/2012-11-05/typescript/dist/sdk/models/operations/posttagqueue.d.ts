import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagQueueActionEnum {
    TagQueue = "TagQueue"
}
export declare enum PostTagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostTagQueueQueryParams extends SpeakeasyBase {
    action: PostTagQueueActionEnum;
    version: PostTagQueueVersionEnum;
}
export declare class PostTagQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagQueueRequest extends SpeakeasyBase {
    queryParams: PostTagQueueQueryParams;
    headers: PostTagQueueHeaders;
    request?: Uint8Array;
}
export declare class PostTagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
