import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetBatchPredictionXAmzTargetEnum {
    AmazonMl20141212GetBatchPrediction = "AmazonML_20141212.GetBatchPrediction"
}
export declare class GetBatchPredictionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBatchPredictionXAmzTargetEnum;
}
export declare class GetBatchPredictionRequest extends SpeakeasyBase {
    headers: GetBatchPredictionHeaders;
    request: shared.GetBatchPredictionInput;
}
export declare class GetBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    getBatchPredictionOutput?: shared.GetBatchPredictionOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
