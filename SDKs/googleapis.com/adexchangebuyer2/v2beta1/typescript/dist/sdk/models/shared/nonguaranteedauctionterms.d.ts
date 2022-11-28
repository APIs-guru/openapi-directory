import { SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";
/**
 * Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
**/
export declare class NonGuaranteedAuctionTerms extends SpeakeasyBase {
    autoOptimizePrivateAuction?: boolean;
    reservePricesPerBuyer?: PricePerBuyer[];
}
