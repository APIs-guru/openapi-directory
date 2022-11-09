import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DealPausingInfoPauseRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED"
,    Buyer = "BUYER"
,    Seller = "SELLER"
}


// DealPausingInfo
/** 
 * Information related to deal pausing.
**/
export class DealPausingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=pauseReason" })
  pauseReason?: string;

  @Metadata({ data: "json, name=pauseRole" })
  pauseRole?: DealPausingInfoPauseRoleEnum;

  @Metadata({ data: "json, name=pausingConsented" })
  pausingConsented?: boolean;
}
