import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CountClosedWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceCountClosedWorkflowExecutions = "SimpleWorkflowService.CountClosedWorkflowExecutions"
}
export declare class CountClosedWorkflowExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountClosedWorkflowExecutionsXAmzTargetEnum;
}
export declare class CountClosedWorkflowExecutionsRequest extends SpeakeasyBase {
    headers: CountClosedWorkflowExecutionsHeaders;
    request: shared.CountClosedWorkflowExecutionsInput;
}
export declare class CountClosedWorkflowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowExecutionCount?: shared.WorkflowExecutionCount;
}
