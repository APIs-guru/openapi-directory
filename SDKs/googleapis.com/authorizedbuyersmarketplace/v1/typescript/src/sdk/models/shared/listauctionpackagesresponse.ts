import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuctionPackage } from "./auctionpackage";



// ListAuctionPackagesResponse
/** 
 * Response message for listing auction packages.
**/
export class ListAuctionPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auctionPackages", elemType: AuctionPackage })
  auctionPackages?: AuctionPackage[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
