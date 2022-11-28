import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecipientAccountReference
/** 
 * Recipient account information, like PayPal email. If the payment method is PayPal, this structure contains the recipient's PayPal email address.
**/
export class RecipientAccountReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: string;
}
