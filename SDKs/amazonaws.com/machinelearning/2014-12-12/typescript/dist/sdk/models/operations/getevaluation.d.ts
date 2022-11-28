import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEvaluationXAmzTargetEnum {
    AmazonMl20141212GetEvaluation = "AmazonML_20141212.GetEvaluation"
}
export declare class GetEvaluationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEvaluationXAmzTargetEnum;
}
export declare class GetEvaluationRequest extends SpeakeasyBase {
    headers: GetEvaluationHeaders;
    request: shared.GetEvaluationInput;
}
export declare class GetEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    getEvaluationOutput?: shared.GetEvaluationOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
