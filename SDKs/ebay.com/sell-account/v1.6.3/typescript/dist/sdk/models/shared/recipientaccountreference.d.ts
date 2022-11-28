import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Recipient account information, like PayPal email. If the payment method is PayPal, this structure contains the recipient's PayPal email address.
**/
export declare class RecipientAccountReference extends SpeakeasyBase {
    referenceId?: string;
    referenceType?: string;
}
