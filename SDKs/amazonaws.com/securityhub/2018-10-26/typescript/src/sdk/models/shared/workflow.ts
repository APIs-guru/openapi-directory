import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowStatusEnum } from "./workflowstatusenum";


// Workflow
/** 
 * Provides information about the status of the investigation into a finding.
**/
export class Workflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: WorkflowStatusEnum;
}
