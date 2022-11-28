import { SpeakeasyBase } from "../../../internal/utils";
import { Body } from "./body";
import { Content } from "./content";
/**
 * Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
**/
export declare class Message extends SpeakeasyBase {
    body: Body;
    subject: Content;
}
