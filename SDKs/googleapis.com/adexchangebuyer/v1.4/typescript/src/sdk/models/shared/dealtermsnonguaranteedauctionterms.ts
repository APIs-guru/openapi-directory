import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";



export class DealTermsNonGuaranteedAuctionTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoOptimizePrivateAuction" })
  autoOptimizePrivateAuction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reservePricePerBuyers", elemType: PricePerBuyer })
  reservePricePerBuyers?: PricePerBuyer[];
}
