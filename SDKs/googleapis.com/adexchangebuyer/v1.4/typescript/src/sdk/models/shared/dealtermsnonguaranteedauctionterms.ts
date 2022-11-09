import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PricePerBuyer } from "./priceperbuyer";


export class DealTermsNonGuaranteedAuctionTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoOptimizePrivateAuction" })
  autoOptimizePrivateAuction?: boolean;

  @Metadata({ data: "json, name=reservePricePerBuyers", elemType: shared.PricePerBuyer })
  reservePricePerBuyers?: PricePerBuyer[];
}
