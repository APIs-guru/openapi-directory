import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBatchDeleteAttributesActionEnum {
    BatchDeleteAttributes = "BatchDeleteAttributes"
}
export declare enum PostBatchDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostBatchDeleteAttributesQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostBatchDeleteAttributesActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostBatchDeleteAttributesVersionEnum;
}
export declare class PostBatchDeleteAttributesRequest extends SpeakeasyBase {
    queryParams: PostBatchDeleteAttributesQueryParams;
    request?: Uint8Array;
}
export declare class PostBatchDeleteAttributesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
