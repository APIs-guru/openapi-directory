import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Listing } from "./listing";
/**
 * Message for response to the list of Listings.
**/
export declare class ListListingsResponse extends SpeakeasyBase {
    listings?: Listing[];
    nextPageToken?: string;
}
