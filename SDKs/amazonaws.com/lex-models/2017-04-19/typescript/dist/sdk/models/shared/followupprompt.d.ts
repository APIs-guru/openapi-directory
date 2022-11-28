import { SpeakeasyBase } from "../../../internal/utils";
import { Prompt } from "./prompt";
import { Statement } from "./statement";
/**
 * A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
**/
export declare class FollowUpPrompt extends SpeakeasyBase {
    prompt: Prompt;
    rejectionStatement: Statement;
}
