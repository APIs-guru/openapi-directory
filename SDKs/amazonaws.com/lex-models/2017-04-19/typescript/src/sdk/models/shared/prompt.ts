import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


// Prompt
/** 
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export class Prompt extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxAttempts" })
  maxAttempts: number;

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages: Message[];

  @Metadata({ data: "json, name=responseCard" })
  responseCard?: string;
}
