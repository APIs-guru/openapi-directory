import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";
/**
 * A list of choices to be updated.
**/
export declare class ChoiceUpdate extends SpeakeasyBase {
    notes?: string;
    reason?: ChoiceReasonEnum;
    status: ChoiceStatusEnum;
}
