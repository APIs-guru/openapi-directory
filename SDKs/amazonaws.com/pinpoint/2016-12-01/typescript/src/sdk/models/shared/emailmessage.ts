import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RawEmail } from "./rawemail";
import { SimpleEmail } from "./simpleemail";


// EmailMessage
/** 
 * Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
**/
export class EmailMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=FeedbackForwardingAddress" })
  feedbackForwardingAddress?: string;

  @Metadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @Metadata({ data: "json, name=RawEmail" })
  rawEmail?: RawEmail;

  @Metadata({ data: "json, name=ReplyToAddresses" })
  replyToAddresses?: string[];

  @Metadata({ data: "json, name=SimpleEmail" })
  simpleEmail?: SimpleEmail;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;
}
