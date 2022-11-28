import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The type that defines the fields for the price details for an item.
**/
export declare class PricingSummary extends SpeakeasyBase {
    auctionReservePrice?: Amount;
    auctionStartPrice?: Amount;
    price?: Amount;
}
