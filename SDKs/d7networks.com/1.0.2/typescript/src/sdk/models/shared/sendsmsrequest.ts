import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendSmsRequest
/** 
 * Send SMS Request
**/
export class SendSmsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=to" })
  to: number;
}
