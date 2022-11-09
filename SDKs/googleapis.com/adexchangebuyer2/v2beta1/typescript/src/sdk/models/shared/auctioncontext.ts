import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuctionContextAuctionTypesEnum {
    OpenAuction = "OPEN_AUCTION"
,    DirectDeals = "DIRECT_DEALS"
}


// AuctionContext
/** 
 * Output only. The auction type the restriction applies to.
**/
export class AuctionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=auctionTypes" })
  auctionTypes?: AuctionContextAuctionTypesEnum[];
}
