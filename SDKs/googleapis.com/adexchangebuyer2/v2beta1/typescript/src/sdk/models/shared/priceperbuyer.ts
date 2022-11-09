import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Buyer } from "./buyer";
import { Price } from "./price";


// PricePerBuyer
/** 
 * Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.
**/
export class PricePerBuyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserIds" })
  advertiserIds?: string[];

  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=price" })
  price?: Price;
}
