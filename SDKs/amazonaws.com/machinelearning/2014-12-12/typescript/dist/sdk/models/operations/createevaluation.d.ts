import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateEvaluationXAmzTargetEnum {
    AmazonMl20141212CreateEvaluation = "AmazonML_20141212.CreateEvaluation"
}
export declare class CreateEvaluationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEvaluationXAmzTargetEnum;
}
export declare class CreateEvaluationRequest extends SpeakeasyBase {
    headers: CreateEvaluationHeaders;
    request: shared.CreateEvaluationInput;
}
export declare class CreateEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    createEvaluationOutput?: shared.CreateEvaluationOutput;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
