import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";



// PaymentPolicy
/** 
 * Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
**/
export class PaymentPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType })
  categoryTypes?: CategoryType[];

  @SpeakeasyMetadata({ data: "json, name=deposit" })
  deposit?: Deposit;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fullPaymentDueIn" })
  fullPaymentDueIn?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=immediatePay" })
  immediatePay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentInstructions" })
  paymentInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethods", elemType: PaymentMethod })
  paymentMethods?: PaymentMethod[];

  @SpeakeasyMetadata({ data: "json, name=paymentPolicyId" })
  paymentPolicyId?: string;
}
