import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuctionPackage
/** 
 * Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.
**/
export class AuctionPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subscribedClients" })
  subscribedClients?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
