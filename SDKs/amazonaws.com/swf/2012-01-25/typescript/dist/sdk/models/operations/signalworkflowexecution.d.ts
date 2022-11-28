import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SignalWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceSignalWorkflowExecution = "SimpleWorkflowService.SignalWorkflowExecution"
}
export declare class SignalWorkflowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SignalWorkflowExecutionXAmzTargetEnum;
}
export declare class SignalWorkflowExecutionRequest extends SpeakeasyBase {
    headers: SignalWorkflowExecutionHeaders;
    request: shared.SignalWorkflowExecutionInput;
}
export declare class SignalWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
