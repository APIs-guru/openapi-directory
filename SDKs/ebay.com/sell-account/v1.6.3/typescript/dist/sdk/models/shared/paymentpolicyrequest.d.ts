import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";
/**
 * This root container defines a seller's payment policy for a specific marketplace and category type. Used when creating or updating a payment policy, paymentPolicyRequest encapsulates a seller's terms for how buyers can pay for the items they buy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
export declare class PaymentPolicyRequest extends SpeakeasyBase {
    categoryTypes?: CategoryType[];
    deposit?: Deposit;
    description?: string;
    fullPaymentDueIn?: TimeDuration;
    immediatePay?: boolean;
    marketplaceId?: string;
    name?: string;
    paymentInstructions?: string;
    paymentMethods?: PaymentMethod[];
}
