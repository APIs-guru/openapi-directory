import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceStartWorkflowExecution = "SimpleWorkflowService.StartWorkflowExecution"
}
export declare class StartWorkflowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartWorkflowExecutionXAmzTargetEnum;
}
export declare class StartWorkflowExecutionRequest extends SpeakeasyBase {
    headers: StartWorkflowExecutionHeaders;
    request: shared.StartWorkflowExecutionInput;
}
export declare class StartWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    defaultUndefinedFault?: any;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    run?: shared.Run;
    statusCode: number;
    typeDeprecatedFault?: any;
    unknownResourceFault?: any;
    workflowExecutionAlreadyStartedFault?: any;
}
