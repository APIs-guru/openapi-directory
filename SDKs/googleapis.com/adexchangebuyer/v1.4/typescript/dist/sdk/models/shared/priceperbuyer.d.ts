import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { Price } from "./price";
/**
 * Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.
**/
export declare class PricePerBuyer extends SpeakeasyBase {
    auctionTier?: string;
    billedBuyer?: Buyer;
    buyer?: Buyer;
    price?: Price;
}
