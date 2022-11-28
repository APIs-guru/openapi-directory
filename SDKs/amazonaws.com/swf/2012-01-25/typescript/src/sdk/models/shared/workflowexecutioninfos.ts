import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionInfo } from "./workflowexecutioninfo";



// WorkflowExecutionInfos
/** 
 * Contains a paginated list of information about workflow executions.
**/
export class WorkflowExecutionInfos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionInfos", elemType: WorkflowExecutionInfo })
  executionInfos: WorkflowExecutionInfo[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
