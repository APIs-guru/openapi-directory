import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuctionPackage
/** 
 * Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.
**/
export class AuctionPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subscribedClients" })
  subscribedClients?: string[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
