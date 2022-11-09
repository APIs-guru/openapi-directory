import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkflowExecutionInfo } from "./workflowexecutioninfo";


// WorkflowExecutionInfos
/** 
 * Contains a paginated list of information about workflow executions.
**/
export class WorkflowExecutionInfos extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionInfos", elemType: shared.WorkflowExecutionInfo })
  executionInfos: WorkflowExecutionInfo[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
