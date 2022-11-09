import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";


// ChoiceUpdate
/** 
 * A list of choices to be updated.
**/
export class ChoiceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: ChoiceReasonEnum;

  @Metadata({ data: "json, name=Status" })
  status: ChoiceStatusEnum;
}
