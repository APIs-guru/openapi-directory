import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteEvaluationXAmzTargetEnum {
    AmazonMl20141212DeleteEvaluation = "AmazonML_20141212.DeleteEvaluation"
}
export declare class DeleteEvaluationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEvaluationXAmzTargetEnum;
}
export declare class DeleteEvaluationRequest extends SpeakeasyBase {
    headers: DeleteEvaluationHeaders;
    request: shared.DeleteEvaluationInput;
}
export declare class DeleteEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    deleteEvaluationOutput?: shared.DeleteEvaluationOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
