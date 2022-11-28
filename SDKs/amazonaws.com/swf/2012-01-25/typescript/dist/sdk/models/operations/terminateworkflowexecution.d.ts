import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TerminateWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceTerminateWorkflowExecution = "SimpleWorkflowService.TerminateWorkflowExecution"
}
export declare class TerminateWorkflowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateWorkflowExecutionXAmzTargetEnum;
}
export declare class TerminateWorkflowExecutionRequest extends SpeakeasyBase {
    headers: TerminateWorkflowExecutionHeaders;
    request: shared.TerminateWorkflowExecutionInput;
}
export declare class TerminateWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
