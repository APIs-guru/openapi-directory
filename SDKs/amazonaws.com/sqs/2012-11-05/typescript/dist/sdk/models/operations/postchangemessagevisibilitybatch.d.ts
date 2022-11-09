import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostChangeMessageVisibilityBatchActionEnum {
    ChangeMessageVisibilityBatch = "ChangeMessageVisibilityBatch"
}
export declare enum PostChangeMessageVisibilityBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostChangeMessageVisibilityBatchQueryParams extends SpeakeasyBase {
    action: PostChangeMessageVisibilityBatchActionEnum;
    version: PostChangeMessageVisibilityBatchVersionEnum;
}
export declare class PostChangeMessageVisibilityBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostChangeMessageVisibilityBatchRequest extends SpeakeasyBase {
    queryParams: PostChangeMessageVisibilityBatchQueryParams;
    headers: PostChangeMessageVisibilityBatchHeaders;
    request?: Uint8Array;
}
export declare class PostChangeMessageVisibilityBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
