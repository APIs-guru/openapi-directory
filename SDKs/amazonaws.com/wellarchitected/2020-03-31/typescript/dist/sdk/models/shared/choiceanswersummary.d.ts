import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";
/**
 * A choice summary that has been answered on a question in your workload.
**/
export declare class ChoiceAnswerSummary extends SpeakeasyBase {
    choiceId?: string;
    reason?: ChoiceReasonEnum;
    status?: ChoiceStatusEnum;
}
