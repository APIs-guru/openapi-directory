import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GiftDetails
/** 
 * This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
**/
export class GiftDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=recipientEmail" })
  recipientEmail?: string;

  @Metadata({ data: "json, name=senderName" })
  senderName?: string;
}
