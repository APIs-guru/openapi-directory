import { SpeakeasyBase } from "../../../internal/utils";
import { AuctionPackage } from "./auctionpackage";
/**
 * Response message for listing auction packages.
**/
export declare class ListAuctionPackagesResponse extends SpeakeasyBase {
    auctionPackages?: AuctionPackage[];
    nextPageToken?: string;
}
