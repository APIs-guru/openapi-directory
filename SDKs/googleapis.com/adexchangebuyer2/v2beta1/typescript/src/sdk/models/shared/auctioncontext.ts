import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuctionContextAuctionTypesEnum {
    OpenAuction = "OPEN_AUCTION",
    DirectDeals = "DIRECT_DEALS"
}


// AuctionContext
/** 
 * Output only. The auction type the restriction applies to.
**/
export class AuctionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auctionTypes" })
  auctionTypes?: AuctionContextAuctionTypesEnum[];
}
