import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuppressedDestinationAttributes
/** 
 * An object that contains additional attributes that are related an email address that is on the suppression list for your account.
**/
export class SuppressedDestinationAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeedbackId" })
  feedbackId?: string;

  @Metadata({ data: "json, name=MessageId" })
  messageId?: string;
}
