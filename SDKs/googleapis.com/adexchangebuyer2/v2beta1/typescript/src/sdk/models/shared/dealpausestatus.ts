import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DealPauseStatusFirstPausedByEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}


// DealPauseStatus
/** 
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
**/
export class DealPauseStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyerPauseReason" })
  buyerPauseReason?: string;

  @SpeakeasyMetadata({ data: "json, name=firstPausedBy" })
  firstPausedBy?: DealPauseStatusFirstPausedByEnum;

  @SpeakeasyMetadata({ data: "json, name=hasBuyerPaused" })
  hasBuyerPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasSellerPaused" })
  hasSellerPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sellerPauseReason" })
  sellerPauseReason?: string;
}
