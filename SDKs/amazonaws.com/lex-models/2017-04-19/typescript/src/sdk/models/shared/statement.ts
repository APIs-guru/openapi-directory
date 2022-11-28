import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// Statement
/** 
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
**/
export class Statement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages: Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}
