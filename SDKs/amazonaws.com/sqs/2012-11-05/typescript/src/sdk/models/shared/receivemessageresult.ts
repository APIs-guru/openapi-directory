import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// ReceiveMessageResult
/** 
 * A list of received messages.
**/
export class ReceiveMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Message })
  messages?: Message[];
}
