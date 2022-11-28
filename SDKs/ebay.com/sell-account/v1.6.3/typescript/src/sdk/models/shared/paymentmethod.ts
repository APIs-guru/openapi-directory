import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipientAccountReference } from "./recipientaccountreference";



// PaymentMethod
/** 
 * Container specifying a payment method that is accepted by the seller. Specify multiple payment methods by repeating this container. For more on payment methods, see Accepted payments policy. Note that payment methods are not applicable to classified ad listings &ndash; all classified ad payments are handled off of the eBay platform.
**/
export class PaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brands" })
  brands?: string[];

  @SpeakeasyMetadata({ data: "json, name=paymentMethodType" })
  paymentMethodType?: string;

  @SpeakeasyMetadata({ data: "json, name=recipientAccountReference" })
  recipientAccountReference?: RecipientAccountReference;
}
