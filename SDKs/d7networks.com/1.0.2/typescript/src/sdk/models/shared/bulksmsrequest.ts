import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// BulkSmsRequest
/** 
 * Bulk SMS Request
**/
export class BulkSmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages: Message[];
}
