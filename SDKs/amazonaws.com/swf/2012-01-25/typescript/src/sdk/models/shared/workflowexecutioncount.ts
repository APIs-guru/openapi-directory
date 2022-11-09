import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecutionCount
/** 
 * Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> 
**/
export class WorkflowExecutionCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
