import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuctionContextAuctionTypesEnum {
    OpenAuction = "OPEN_AUCTION",
    DirectDeals = "DIRECT_DEALS"
}
/**
 * Output only. The auction type the restriction applies to.
**/
export declare class AuctionContext extends SpeakeasyBase {
    auctionTypes?: AuctionContextAuctionTypesEnum[];
}
