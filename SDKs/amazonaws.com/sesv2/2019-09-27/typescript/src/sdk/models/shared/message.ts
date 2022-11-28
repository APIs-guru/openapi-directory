import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Body } from "./body";
import { Content } from "./content";



// Message
/** 
 * Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body: Body;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject: Content;
}
