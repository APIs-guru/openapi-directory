import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecutionFilter
/** 
 * Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
**/
export class WorkflowExecutionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
