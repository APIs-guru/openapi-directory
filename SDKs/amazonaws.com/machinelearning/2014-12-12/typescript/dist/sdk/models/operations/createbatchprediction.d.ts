import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateBatchPredictionXAmzTargetEnum {
    AmazonMl20141212CreateBatchPrediction = "AmazonML_20141212.CreateBatchPrediction"
}
export declare class CreateBatchPredictionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBatchPredictionXAmzTargetEnum;
}
export declare class CreateBatchPredictionRequest extends SpeakeasyBase {
    headers: CreateBatchPredictionHeaders;
    request: shared.CreateBatchPredictionInput;
}
export declare class CreateBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    createBatchPredictionOutput?: shared.CreateBatchPredictionOutput;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
