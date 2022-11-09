import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


// BulkSmsRequest
/** 
 * Bulk SMS Request
**/
export class BulkSmsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages: Message[];
}
