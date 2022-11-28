import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RespondDecisionTaskCompletedXAmzTargetEnum {
    SimpleWorkflowServiceRespondDecisionTaskCompleted = "SimpleWorkflowService.RespondDecisionTaskCompleted"
}
export declare class RespondDecisionTaskCompletedHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondDecisionTaskCompletedXAmzTargetEnum;
}
export declare class RespondDecisionTaskCompletedRequest extends SpeakeasyBase {
    headers: RespondDecisionTaskCompletedHeaders;
    request: shared.RespondDecisionTaskCompletedInput;
}
export declare class RespondDecisionTaskCompletedResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
