import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CopyStepDetails } from "./copystepdetails";
import { CustomStepDetails } from "./customstepdetails";
import { DeleteStepDetails } from "./deletestepdetails";
import { TagStepDetails } from "./tagstepdetails";
import { WorkflowStepTypeEnum } from "./workflowsteptypeenum";


// WorkflowStep
/** 
 * The basic building block of a workflow.
**/
export class WorkflowStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=CopyStepDetails" })
  copyStepDetails?: CopyStepDetails;

  @Metadata({ data: "json, name=CustomStepDetails" })
  customStepDetails?: CustomStepDetails;

  @Metadata({ data: "json, name=DeleteStepDetails" })
  deleteStepDetails?: DeleteStepDetails;

  @Metadata({ data: "json, name=TagStepDetails" })
  tagStepDetails?: TagStepDetails;

  @Metadata({ data: "json, name=Type" })
  type?: WorkflowStepTypeEnum;
}
