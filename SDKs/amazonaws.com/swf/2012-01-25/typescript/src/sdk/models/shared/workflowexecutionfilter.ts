import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowExecutionFilter
/** 
 * Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
**/
export class WorkflowExecutionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
