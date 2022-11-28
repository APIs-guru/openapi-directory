import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Prompt } from "./prompt";
import { Statement } from "./statement";



// FollowUpPrompt
/** 
 * A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
**/
export class FollowUpPrompt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: Prompt;

  @SpeakeasyMetadata({ data: "json, name=rejectionStatement" })
  rejectionStatement: Statement;
}
