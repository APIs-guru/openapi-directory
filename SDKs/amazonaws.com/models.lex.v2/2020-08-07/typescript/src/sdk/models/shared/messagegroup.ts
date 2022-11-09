import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";
import { Message } from "./message";


// MessageGroup
/** 
 * Provides one or more messages that Amazon Lex should send to the user.
**/
export class MessageGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: Message;

  @Metadata({ data: "json, name=variations", elemType: shared.Message })
  variations?: Message[];
}
