import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DealServingMetadataDealPauseStatus
/** 
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
**/
export class DealServingMetadataDealPauseStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyerPauseReason" })
  buyerPauseReason?: string;

  @Metadata({ data: "json, name=firstPausedBy" })
  firstPausedBy?: string;

  @Metadata({ data: "json, name=hasBuyerPaused" })
  hasBuyerPaused?: boolean;

  @Metadata({ data: "json, name=hasSellerPaused" })
  hasSellerPaused?: boolean;

  @Metadata({ data: "json, name=sellerPauseReason" })
  sellerPauseReason?: string;
}
