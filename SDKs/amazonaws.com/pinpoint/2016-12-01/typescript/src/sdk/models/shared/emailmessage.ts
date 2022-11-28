import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RawEmail } from "./rawemail";
import { SimpleEmail } from "./simpleemail";



// EmailMessage
/** 
 * Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
**/
export class EmailMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=FeedbackForwardingAddress" })
  feedbackForwardingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=RawEmail" })
  rawEmail?: RawEmail;

  @SpeakeasyMetadata({ data: "json, name=ReplyToAddresses" })
  replyToAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=SimpleEmail" })
  simpleEmail?: SimpleEmail;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;
}
