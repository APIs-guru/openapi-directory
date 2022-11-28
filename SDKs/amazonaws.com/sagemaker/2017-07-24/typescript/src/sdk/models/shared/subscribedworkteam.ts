import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscribedWorkteam
/** 
 * Describes a work team of a vendor that does the a labelling job.
**/
export class SubscribedWorkteam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListingId" })
  listingId?: string;

  @SpeakeasyMetadata({ data: "json, name=MarketplaceDescription" })
  marketplaceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MarketplaceTitle" })
  marketplaceTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=SellerName" })
  sellerName?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
