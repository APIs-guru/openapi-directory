import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";



// ListListingsResponse
/** 
 * Message for response to the list of Listings.
**/
export class ListListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listings", elemType: Listing })
  listings?: Listing[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
