import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
**/
export declare class GiftDetails extends SpeakeasyBase {
    message?: string;
    recipientEmail?: string;
    senderName?: string;
}
