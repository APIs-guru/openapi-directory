import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChoiceAnswerSummary } from "./choiceanswersummary";
import { Choice } from "./choice";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";


// AnswerSummary
/** 
 * An answer summary of a lens review in a workload.
**/
export class AnswerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChoiceAnswerSummaries", elemType: shared.ChoiceAnswerSummary })
  choiceAnswerSummaries?: ChoiceAnswerSummary[];

  @Metadata({ data: "json, name=Choices", elemType: shared.Choice })
  choices?: Choice[];

  @Metadata({ data: "json, name=IsApplicable" })
  isApplicable?: boolean;

  @Metadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @Metadata({ data: "json, name=QuestionId" })
  questionId?: string;

  @Metadata({ data: "json, name=QuestionTitle" })
  questionTitle?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: AnswerReasonEnum;

  @Metadata({ data: "json, name=Risk" })
  risk?: RiskEnum;

  @Metadata({ data: "json, name=SelectedChoices" })
  selectedChoices?: string[];
}
