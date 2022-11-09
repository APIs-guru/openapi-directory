import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateBatchPredictionXAmzTargetEnum {
    AmazonMl20141212UpdateBatchPrediction = "AmazonML_20141212.UpdateBatchPrediction"
}
export declare class UpdateBatchPredictionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBatchPredictionXAmzTargetEnum;
}
export declare class UpdateBatchPredictionRequest extends SpeakeasyBase {
    headers: UpdateBatchPredictionHeaders;
    request: shared.UpdateBatchPredictionInput;
}
export declare class UpdateBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateBatchPredictionOutput?: shared.UpdateBatchPredictionOutput;
}
