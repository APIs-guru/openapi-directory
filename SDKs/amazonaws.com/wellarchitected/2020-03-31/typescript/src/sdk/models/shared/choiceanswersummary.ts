import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";



// ChoiceAnswerSummary
/** 
 * A choice summary that has been answered on a question in your workload.
**/
export class ChoiceAnswerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChoiceId" })
  choiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: ChoiceReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ChoiceStatusEnum;
}
