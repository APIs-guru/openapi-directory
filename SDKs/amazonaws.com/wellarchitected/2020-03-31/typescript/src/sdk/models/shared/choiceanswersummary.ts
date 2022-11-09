import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";


// ChoiceAnswerSummary
/** 
 * A choice summary that has been answered on a question in your workload.
**/
export class ChoiceAnswerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChoiceId" })
  choiceId?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: ChoiceReasonEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ChoiceStatusEnum;
}
