import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentPolicy } from "./paymentpolicy";
/**
 * The response payload for payment policy requests.
**/
export declare class PaymentPolicyResponse extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    paymentPolicies?: PaymentPolicy[];
    prev?: string;
    total?: number;
}
