import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowExecutionOpenCounts
/** 
 * Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
**/
export class WorkflowExecutionOpenCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=openActivityTasks" })
  openActivityTasks: number;

  @SpeakeasyMetadata({ data: "json, name=openChildWorkflowExecutions" })
  openChildWorkflowExecutions: number;

  @SpeakeasyMetadata({ data: "json, name=openDecisionTasks" })
  openDecisionTasks: number;

  @SpeakeasyMetadata({ data: "json, name=openLambdaFunctions" })
  openLambdaFunctions?: number;

  @SpeakeasyMetadata({ data: "json, name=openTimers" })
  openTimers: number;
}
