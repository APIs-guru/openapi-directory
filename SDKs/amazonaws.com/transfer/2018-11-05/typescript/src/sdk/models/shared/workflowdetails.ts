import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowDetail } from "./workflowdetail";



// WorkflowDetails
/** 
 * Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
**/
export class WorkflowDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnUpload", elemType: WorkflowDetail })
  onUpload: WorkflowDetail[];
}
