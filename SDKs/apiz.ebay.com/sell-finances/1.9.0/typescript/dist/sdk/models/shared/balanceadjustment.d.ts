import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is used by the balanceAdjustment container, which shows the seller payout balance that will be applied toward the charges outlined in the charges array.
**/
export declare class BalanceAdjustment extends SpeakeasyBase {
    adjustmentAmount?: Amount;
    adjustmentType?: string;
}
