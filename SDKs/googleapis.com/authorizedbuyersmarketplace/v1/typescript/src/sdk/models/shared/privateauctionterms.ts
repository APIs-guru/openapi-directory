import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


// PrivateAuctionTerms
/** 
 * Pricing terms for Private Auctions.
**/
export class PrivateAuctionTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=floorPrice" })
  floorPrice?: Price;

  @Metadata({ data: "json, name=openAuctionAllowed" })
  openAuctionAllowed?: boolean;
}
