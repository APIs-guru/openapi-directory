import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscribedWorkteam
/** 
 * Describes a work team of a vendor that does the a labelling job.
**/
export class SubscribedWorkteam extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListingId" })
  listingId?: string;

  @Metadata({ data: "json, name=MarketplaceDescription" })
  marketplaceDescription?: string;

  @Metadata({ data: "json, name=MarketplaceTitle" })
  marketplaceTitle?: string;

  @Metadata({ data: "json, name=SellerName" })
  sellerName?: string;

  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
