import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is used to display fees that are automatically deducted from seller payouts.
**/
export declare class Fee extends SpeakeasyBase {
    amount?: Amount;
    feeMemo?: string;
    feeType?: string;
}
