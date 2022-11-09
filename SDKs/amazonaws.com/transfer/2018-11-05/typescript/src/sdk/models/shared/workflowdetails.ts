import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkflowDetail } from "./workflowdetail";


// WorkflowDetails
/** 
 * Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
**/
export class WorkflowDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=OnUpload", elemType: shared.WorkflowDetail })
  onUpload: WorkflowDetail[];
}
