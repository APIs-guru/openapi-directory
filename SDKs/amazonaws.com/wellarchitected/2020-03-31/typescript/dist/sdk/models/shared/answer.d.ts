import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceAnswer } from "./choiceanswer";
import { Choice } from "./choice";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";
/**
 * An answer of the question.
**/
export declare class Answer extends SpeakeasyBase {
    choiceAnswers?: ChoiceAnswer[];
    choices?: Choice[];
    helpfulResourceUrl?: string;
    improvementPlanUrl?: string;
    isApplicable?: boolean;
    notes?: string;
    pillarId?: string;
    questionDescription?: string;
    questionId?: string;
    questionTitle?: string;
    reason?: AnswerReasonEnum;
    risk?: RiskEnum;
    selectedChoices?: string[];
}
