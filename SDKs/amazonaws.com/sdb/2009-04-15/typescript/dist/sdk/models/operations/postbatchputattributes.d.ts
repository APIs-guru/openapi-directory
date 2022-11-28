import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBatchPutAttributesActionEnum {
    BatchPutAttributes = "BatchPutAttributes"
}
export declare enum PostBatchPutAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostBatchPutAttributesQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostBatchPutAttributesActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostBatchPutAttributesVersionEnum;
}
export declare class PostBatchPutAttributesRequest extends SpeakeasyBase {
    queryParams: PostBatchPutAttributesQueryParams;
    request?: Uint8Array;
}
export declare class PostBatchPutAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
