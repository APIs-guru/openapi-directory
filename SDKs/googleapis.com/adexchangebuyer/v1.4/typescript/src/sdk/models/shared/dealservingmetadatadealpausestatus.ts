import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DealServingMetadataDealPauseStatus
/** 
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
**/
export class DealServingMetadataDealPauseStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyerPauseReason" })
  buyerPauseReason?: string;

  @SpeakeasyMetadata({ data: "json, name=firstPausedBy" })
  firstPausedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=hasBuyerPaused" })
  hasBuyerPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasSellerPaused" })
  hasSellerPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sellerPauseReason" })
  sellerPauseReason?: string;
}
