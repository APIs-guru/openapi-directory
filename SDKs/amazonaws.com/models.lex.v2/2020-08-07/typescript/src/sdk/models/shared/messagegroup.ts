import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// MessageGroup
/** 
 * Provides one or more messages that Amazon Lex should send to the user.
**/
export class MessageGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: Message;

  @SpeakeasyMetadata({ data: "json, name=variations", elemType: Message })
  variations?: Message[];
}
