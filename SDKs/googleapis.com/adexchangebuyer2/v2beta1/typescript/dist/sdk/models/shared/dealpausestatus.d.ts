import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DealPauseStatusFirstPausedByEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
**/
export declare class DealPauseStatus extends SpeakeasyBase {
    buyerPauseReason?: string;
    firstPausedBy?: DealPauseStatusFirstPausedByEnum;
    hasBuyerPaused?: boolean;
    hasSellerPaused?: boolean;
    sellerPauseReason?: string;
}
