import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
export declare class SellerInput extends SpeakeasyBase {
    accountId?: string;
}
/**
 * Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
**/
export declare class Seller extends SpeakeasyBase {
    accountId?: string;
    subAccountId?: string;
}
