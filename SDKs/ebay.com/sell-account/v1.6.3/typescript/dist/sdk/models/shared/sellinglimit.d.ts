import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * Defines the selling limit applied to an eBay seller's account.
**/
export declare class SellingLimit extends SpeakeasyBase {
    amount?: Amount;
    quantity?: number;
}
