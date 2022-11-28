import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CountOpenWorkflowExecutionsXAmzTargetEnum {
    SimpleWorkflowServiceCountOpenWorkflowExecutions = "SimpleWorkflowService.CountOpenWorkflowExecutions"
}
export declare class CountOpenWorkflowExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountOpenWorkflowExecutionsXAmzTargetEnum;
}
export declare class CountOpenWorkflowExecutionsRequest extends SpeakeasyBase {
    headers: CountOpenWorkflowExecutionsHeaders;
    request: shared.CountOpenWorkflowExecutionsInput;
}
export declare class CountOpenWorkflowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowExecutionCount?: shared.WorkflowExecutionCount;
}
