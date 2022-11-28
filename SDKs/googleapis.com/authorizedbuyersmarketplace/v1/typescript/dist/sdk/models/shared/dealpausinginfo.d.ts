import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DealPausingInfoPauseRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * Information related to deal pausing.
**/
export declare class DealPausingInfo extends SpeakeasyBase {
    pauseReason?: string;
    pauseRole?: DealPausingInfoPauseRoleEnum;
    pausingConsented?: boolean;
}
