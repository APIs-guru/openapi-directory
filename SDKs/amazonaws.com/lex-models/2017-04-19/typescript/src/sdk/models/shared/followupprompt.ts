import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Prompt } from "./prompt";
import { Statement } from "./statement";


// FollowUpPrompt
/** 
 * A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
**/
export class FollowUpPrompt extends SpeakeasyBase {
  @Metadata({ data: "json, name=prompt" })
  prompt: Prompt;

  @Metadata({ data: "json, name=rejectionStatement" })
  rejectionStatement: Statement;
}
