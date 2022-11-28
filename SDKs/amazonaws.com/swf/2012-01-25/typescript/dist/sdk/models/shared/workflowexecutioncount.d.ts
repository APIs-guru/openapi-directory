import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>
**/
export declare class WorkflowExecutionCount extends SpeakeasyBase {
    count: number;
    truncated?: boolean;
}
