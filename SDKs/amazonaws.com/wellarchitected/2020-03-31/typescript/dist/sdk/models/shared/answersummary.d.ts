import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChoiceAnswerSummary } from "./choiceanswersummary";
import { Choice } from "./choice";
import { AnswerReasonEnum } from "./answerreasonenum";
import { RiskEnum } from "./riskenum";
/**
 * An answer summary of a lens review in a workload.
**/
export declare class AnswerSummary extends SpeakeasyBase {
    choiceAnswerSummaries?: ChoiceAnswerSummary[];
    choices?: Choice[];
    isApplicable?: boolean;
    pillarId?: string;
    questionId?: string;
    questionTitle?: string;
    reason?: AnswerReasonEnum;
    risk?: RiskEnum;
    selectedChoices?: string[];
}
