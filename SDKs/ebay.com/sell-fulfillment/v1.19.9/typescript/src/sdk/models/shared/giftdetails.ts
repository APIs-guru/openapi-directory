import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GiftDetails
/** 
 * This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
**/
export class GiftDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=recipientEmail" })
  recipientEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=senderName" })
  senderName?: string;
}
