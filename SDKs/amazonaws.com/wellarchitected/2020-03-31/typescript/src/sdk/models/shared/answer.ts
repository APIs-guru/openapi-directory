import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChoiceAnswer } from "./choiceanswer";
import { Choice } from "./choice";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";



// Answer
/** 
 * An answer of the question.
**/
export class Answer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChoiceAnswers", elemType: ChoiceAnswer })
  choiceAnswers?: ChoiceAnswer[];

  @SpeakeasyMetadata({ data: "json, name=Choices", elemType: Choice })
  choices?: Choice[];

  @SpeakeasyMetadata({ data: "json, name=HelpfulResourceUrl" })
  helpfulResourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ImprovementPlanUrl" })
  improvementPlanUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=IsApplicable" })
  isApplicable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionDescription" })
  questionDescription?: string;

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
