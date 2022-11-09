import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateEvaluationXAmzTargetEnum {
    AmazonMl20141212UpdateEvaluation = "AmazonML_20141212.UpdateEvaluation"
}
export declare class UpdateEvaluationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEvaluationXAmzTargetEnum;
}
export declare class UpdateEvaluationRequest extends SpeakeasyBase {
    headers: UpdateEvaluationHeaders;
    request: shared.UpdateEvaluationInput;
}
export declare class UpdateEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateEvaluationOutput?: shared.UpdateEvaluationOutput;
}
