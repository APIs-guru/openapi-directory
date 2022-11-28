import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";
/**
 * Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
**/
export declare class PaymentPolicy extends SpeakeasyBase {
    categoryTypes?: CategoryType[];
    deposit?: Deposit;
    description?: string;
    fullPaymentDueIn?: TimeDuration;
    immediatePay?: boolean;
    marketplaceId?: string;
    name?: string;
    paymentInstructions?: string;
    paymentMethods?: PaymentMethod[];
    paymentPolicyId?: string;
}
