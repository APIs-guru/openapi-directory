import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChoiceAnswerSummary } from "./choiceanswersummary";
import { Choice } from "./choice";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";



// AnswerSummary
/** 
 * An answer summary of a lens review in a workload.
**/
export class AnswerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChoiceAnswerSummaries", elemType: ChoiceAnswerSummary })
  choiceAnswerSummaries?: ChoiceAnswerSummary[];

  @SpeakeasyMetadata({ data: "json, name=Choices", elemType: Choice })
  choices?: Choice[];

  @SpeakeasyMetadata({ data: "json, name=IsApplicable" })
  isApplicable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionTitle" })
  questionTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: AnswerReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk?: RiskEnum;

  @SpeakeasyMetadata({ data: "json, name=SelectedChoices" })
  selectedChoices?: string[];
}
