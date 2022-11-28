import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuppressedDestinationAttributes
/** 
 * An object that contains additional attributes that are related an email address that is on the suppression list for your account.
**/
export class SuppressedDestinationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeedbackId" })
  feedbackId?: string;

  @SpeakeasyMetadata({ data: "json, name=MessageId" })
  messageId?: string;
}
