import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Body } from "./body";
import { Content } from "./content";


// Message
/** 
 * Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body: Body;

  @Metadata({ data: "json, name=Subject" })
  subject: Content;
}
