import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PricePerBuyer } from "./priceperbuyer";


// NonGuaranteedAuctionTerms
/** 
 * Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
**/
export class NonGuaranteedAuctionTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoOptimizePrivateAuction" })
  autoOptimizePrivateAuction?: boolean;

  @Metadata({ data: "json, name=reservePricesPerBuyer", elemType: shared.PricePerBuyer })
  reservePricesPerBuyer?: PricePerBuyer[];
}
