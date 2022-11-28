import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";



// NonGuaranteedAuctionTerms
/** 
 * Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
**/
export class NonGuaranteedAuctionTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoOptimizePrivateAuction" })
  autoOptimizePrivateAuction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reservePricesPerBuyer", elemType: PricePerBuyer })
  reservePricesPerBuyer?: PricePerBuyer[];
}
