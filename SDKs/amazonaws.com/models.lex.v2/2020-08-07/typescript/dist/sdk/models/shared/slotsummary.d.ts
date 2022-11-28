import { SpeakeasyBase } from "../../../internal/utils";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { PromptSpecification } from "./promptspecification";
/**
 * Summary information about a slot, a value that the bot elicits from the user.
**/
export declare class SlotSummary extends SpeakeasyBase {
    description?: string;
    lastUpdatedDateTime?: Date;
    slotConstraint?: SlotConstraintEnum;
    slotId?: string;
    slotName?: string;
    slotTypeId?: string;
    valueElicitationPromptSpecification?: PromptSpecification;
}
