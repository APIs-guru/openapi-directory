import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


// Statement
/** 
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
**/
export class Statement extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages: Message[];

  @Metadata({ data: "json, name=responseCard" })
  responseCard?: string;
}
