import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



// PrivateAuctionTermsInput
/** 
 * Pricing terms for Private Auctions.
**/
export class PrivateAuctionTermsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floorPrice" })
  floorPrice?: Price;
}


// PrivateAuctionTerms
/** 
 * Pricing terms for Private Auctions.
**/
export class PrivateAuctionTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floorPrice" })
  floorPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=openAuctionAllowed" })
  openAuctionAllowed?: boolean;
}
