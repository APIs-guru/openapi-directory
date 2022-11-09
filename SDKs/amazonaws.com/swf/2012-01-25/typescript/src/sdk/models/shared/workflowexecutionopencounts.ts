import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecutionOpenCounts
/** 
 * Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
**/
export class WorkflowExecutionOpenCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=openActivityTasks" })
  openActivityTasks: number;

  @Metadata({ data: "json, name=openChildWorkflowExecutions" })
  openChildWorkflowExecutions: number;

  @Metadata({ data: "json, name=openDecisionTasks" })
  openDecisionTasks: number;

  @Metadata({ data: "json, name=openLambdaFunctions" })
  openLambdaFunctions?: number;

  @Metadata({ data: "json, name=openTimers" })
  openTimers: number;
}
