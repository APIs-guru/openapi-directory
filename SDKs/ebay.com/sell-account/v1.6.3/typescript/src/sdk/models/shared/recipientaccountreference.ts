import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecipientAccountReference
/** 
 * Recipient account information, like PayPal email. If the payment method is PayPal, this structure contains the recipient's PayPal email address.
**/
export class RecipientAccountReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: string;
}
