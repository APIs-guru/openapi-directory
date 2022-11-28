import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendSmsRequest
/** 
 * Send SMS Request
**/
export class SendSmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: number;
}
