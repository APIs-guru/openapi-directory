import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchPutAssetPropertyValueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutAssetPropertyValueRequestBody extends SpeakeasyBase {
    entries: shared.PutAssetPropertyValueEntry[];
}
export declare class BatchPutAssetPropertyValueRequest extends SpeakeasyBase {
    headers: BatchPutAssetPropertyValueHeaders;
    request: BatchPutAssetPropertyValueRequestBody;
}
export declare class BatchPutAssetPropertyValueResponse extends SpeakeasyBase {
    batchPutAssetPropertyValueResponse?: shared.BatchPutAssetPropertyValueResponse;
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
