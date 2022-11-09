import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuctionPackage } from "./auctionpackage";


// ListAuctionPackagesResponse
/** 
 * Response message for listing auction packages.
**/
export class ListAuctionPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auctionPackages", elemType: shared.AuctionPackage })
  auctionPackages?: AuctionPackage[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
