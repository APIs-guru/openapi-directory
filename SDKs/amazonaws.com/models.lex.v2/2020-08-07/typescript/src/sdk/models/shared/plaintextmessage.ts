import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlainTextMessage
/** 
 * Defines an ASCII text message to send to the user.
**/
export class PlainTextMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
