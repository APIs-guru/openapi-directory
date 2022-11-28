import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";



// ChoiceUpdate
/** 
 * A list of choices to be updated.
**/
export class ChoiceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: ChoiceReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ChoiceStatusEnum;
}
