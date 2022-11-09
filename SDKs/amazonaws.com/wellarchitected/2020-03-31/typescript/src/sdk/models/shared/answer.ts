import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChoiceAnswer } from "./choiceanswer";
import { Choice } from "./choice";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";


// Answer
/** 
 * An answer of the question.
**/
export class Answer extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChoiceAnswers", elemType: shared.ChoiceAnswer })
  choiceAnswers?: ChoiceAnswer[];

  @Metadata({ data: "json, name=Choices", elemType: shared.Choice })
  choices?: Choice[];

  @Metadata({ data: "json, name=HelpfulResourceUrl" })
  helpfulResourceUrl?: string;

  @Metadata({ data: "json, name=ImprovementPlanUrl" })
  improvementPlanUrl?: string;

  @Metadata({ data: "json, name=IsApplicable" })
  isApplicable?: boolean;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @Metadata({ data: "json, name=QuestionDescription" })
  questionDescription?: string;

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
