import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
**/
export declare class WorkflowExecutionOpenCounts extends SpeakeasyBase {
    openActivityTasks: number;
    openChildWorkflowExecutions: number;
    openDecisionTasks: number;
    openLambdaFunctions?: number;
    openTimers: number;
}
