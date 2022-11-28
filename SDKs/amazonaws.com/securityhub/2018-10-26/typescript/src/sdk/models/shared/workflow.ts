import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStatusEnum } from "./workflowstatusenum";



// Workflow
/** 
 * Provides information about the status of the investigation into a finding.
**/
export class Workflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: WorkflowStatusEnum;
}
