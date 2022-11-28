import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
**/
export declare class DealServingMetadataDealPauseStatus extends SpeakeasyBase {
    buyerPauseReason?: string;
    firstPausedBy?: string;
    hasBuyerPaused?: boolean;
    hasSellerPaused?: boolean;
    sellerPauseReason?: string;
}
