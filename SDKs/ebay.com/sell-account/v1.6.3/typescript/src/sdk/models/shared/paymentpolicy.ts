import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";


// PaymentPolicy
/** 
 * Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
**/
export class PaymentPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryTypes", elemType: shared.CategoryType })
  categoryTypes?: CategoryType[];

  @Metadata({ data: "json, name=deposit" })
  deposit?: Deposit;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fullPaymentDueIn" })
  fullPaymentDueIn?: TimeDuration;

  @Metadata({ data: "json, name=immediatePay" })
  immediatePay?: boolean;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paymentInstructions" })
  paymentInstructions?: string;

  @Metadata({ data: "json, name=paymentMethods", elemType: shared.PaymentMethod })
  paymentMethods?: PaymentMethod[];

  @Metadata({ data: "json, name=paymentPolicyId" })
  paymentPolicyId?: string;
}
