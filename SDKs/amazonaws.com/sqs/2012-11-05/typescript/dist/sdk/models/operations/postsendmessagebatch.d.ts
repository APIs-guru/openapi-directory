import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSendMessageBatchActionEnum {
    SendMessageBatch = "SendMessageBatch"
}
export declare enum PostSendMessageBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostSendMessageBatchQueryParams extends SpeakeasyBase {
    action: PostSendMessageBatchActionEnum;
    version: PostSendMessageBatchVersionEnum;
}
export declare class PostSendMessageBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendMessageBatchRequest extends SpeakeasyBase {
    queryParams: PostSendMessageBatchQueryParams;
    headers: PostSendMessageBatchHeaders;
    request?: Uint8Array;
}
export declare class PostSendMessageBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
