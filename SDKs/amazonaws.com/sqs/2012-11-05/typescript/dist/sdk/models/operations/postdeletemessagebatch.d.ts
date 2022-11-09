import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteMessageBatchActionEnum {
    DeleteMessageBatch = "DeleteMessageBatch"
}
export declare enum PostDeleteMessageBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostDeleteMessageBatchQueryParams extends SpeakeasyBase {
    action: PostDeleteMessageBatchActionEnum;
    version: PostDeleteMessageBatchVersionEnum;
}
export declare class PostDeleteMessageBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteMessageBatchRequest extends SpeakeasyBase {
    queryParams: PostDeleteMessageBatchQueryParams;
    headers: PostDeleteMessageBatchHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteMessageBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
