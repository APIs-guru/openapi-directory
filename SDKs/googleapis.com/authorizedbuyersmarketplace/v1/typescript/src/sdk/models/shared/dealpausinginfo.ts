import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DealPausingInfoPauseRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}


// DealPausingInfo
/** 
 * Information related to deal pausing.
**/
export class DealPausingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pauseReason" })
  pauseReason?: string;

  @SpeakeasyMetadata({ data: "json, name=pauseRole" })
  pauseRole?: DealPausingInfoPauseRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=pausingConsented" })
  pausingConsented?: boolean;
}
