import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Pricing terms for Private Auctions.
**/
export declare class PrivateAuctionTermsInput extends SpeakeasyBase {
    floorPrice?: Price;
}
/**
 * Pricing terms for Private Auctions.
**/
export declare class PrivateAuctionTerms extends SpeakeasyBase {
    floorPrice?: Price;
    openAuctionAllowed?: boolean;
}
