import { SpeakeasyBase } from "../../../internal/utils";
import { DisputeAmount } from "./disputeamount";
/**
 * This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
**/
export declare class MonetaryTransaction extends SpeakeasyBase {
    amount?: DisputeAmount;
    date?: string;
    reason?: string;
    type?: string;
}
