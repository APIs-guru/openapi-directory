import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Buyer } from "./buyer";
import { Buyer } from "./buyer";
import { Price } from "./price";


// PricePerBuyer
/** 
 * Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.
**/
export class PricePerBuyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=auctionTier" })
  auctionTier?: string;

  @Metadata({ data: "json, name=billedBuyer" })
  billedBuyer?: Buyer;

  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=price" })
  price?: Price;
}
