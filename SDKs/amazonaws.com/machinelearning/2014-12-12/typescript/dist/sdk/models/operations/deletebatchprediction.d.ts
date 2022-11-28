import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBatchPredictionXAmzTargetEnum {
    AmazonMl20141212DeleteBatchPrediction = "AmazonML_20141212.DeleteBatchPrediction"
}
export declare class DeleteBatchPredictionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBatchPredictionXAmzTargetEnum;
}
export declare class DeleteBatchPredictionRequest extends SpeakeasyBase {
    headers: DeleteBatchPredictionHeaders;
    request: shared.DeleteBatchPredictionInput;
}
export declare class DeleteBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    deleteBatchPredictionOutput?: shared.DeleteBatchPredictionOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
