import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// Prompt
/** 
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export class Prompt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxAttempts" })
  maxAttempts: number;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages: Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}
