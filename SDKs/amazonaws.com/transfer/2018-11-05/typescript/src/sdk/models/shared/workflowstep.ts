import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=CopyStepDetails" })
  copyStepDetails?: CopyStepDetails;

  @SpeakeasyMetadata({ data: "json, name=CustomStepDetails" })
  customStepDetails?: CustomStepDetails;

  @SpeakeasyMetadata({ data: "json, name=DeleteStepDetails" })
  deleteStepDetails?: DeleteStepDetails;

  @SpeakeasyMetadata({ data: "json, name=TagStepDetails" })
  tagStepDetails?: TagStepDetails;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: WorkflowStepTypeEnum;
}
