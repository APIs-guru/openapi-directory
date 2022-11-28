import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";
import { Error } from "./error";
/**
 * Complex type that that gets populated with a response containing a payment policy.
**/
export declare class SetPaymentPolicyResponse extends SpeakeasyBase {
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
    warnings?: Error[];
}
