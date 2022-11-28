import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
/**
 * This type is used by the resolution container that is returned for payment disputes that have been resolved.
**/
export declare class PaymentDisputeOutcomeDetail extends SpeakeasyBase {
    fees?: SimpleAmount;
    protectedAmount?: SimpleAmount;
    protectionStatus?: string;
    reasonForClosure?: string;
    recoupAmount?: SimpleAmount;
    totalFeeCredit?: SimpleAmount;
}
