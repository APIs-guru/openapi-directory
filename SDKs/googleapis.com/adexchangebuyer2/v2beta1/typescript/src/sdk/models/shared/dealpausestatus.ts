import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DealPauseStatusFirstPausedByEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED"
,    Buyer = "BUYER"
,    Seller = "SELLER"
}


// DealPauseStatus
/** 
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
**/
export class DealPauseStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyerPauseReason" })
  buyerPauseReason?: string;

  @Metadata({ data: "json, name=firstPausedBy" })
  firstPausedBy?: DealPauseStatusFirstPausedByEnum;

  @Metadata({ data: "json, name=hasBuyerPaused" })
  hasBuyerPaused?: boolean;

  @Metadata({ data: "json, name=hasSellerPaused" })
  hasSellerPaused?: boolean;

  @Metadata({ data: "json, name=sellerPauseReason" })
  sellerPauseReason?: string;
}
