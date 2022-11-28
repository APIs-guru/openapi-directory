import { SpeakeasyBase } from "../../../internal/utils";
import { ConfirmationStateEnum } from "./confirmationstateenum";
import { Slot } from "./slot";
import { IntentStateEnum } from "./intentstateenum";
/**
 * The current intent that Amazon Lex V2 is attempting to fulfill.
**/
export declare class Intent extends SpeakeasyBase {
    confirmationState?: ConfirmationStateEnum;
    name: string;
    slots?: Map<string, Slot>;
    state?: IntentStateEnum;
}
