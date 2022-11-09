import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlainTextMessage
/** 
 * Defines an ASCII text message to send to the user.
**/
export class PlainTextMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;
}
