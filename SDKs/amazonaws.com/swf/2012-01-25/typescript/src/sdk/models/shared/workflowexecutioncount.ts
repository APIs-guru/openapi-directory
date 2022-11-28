import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowExecutionCount
/** 
 * Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> 
**/
export class WorkflowExecutionCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
