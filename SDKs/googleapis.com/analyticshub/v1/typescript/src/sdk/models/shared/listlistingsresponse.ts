import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Listing } from "./listing";


// ListListingsResponse
/** 
 * Message for response to the list of Listings.
**/
export class ListListingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=listings", elemType: shared.Listing })
  listings?: Listing[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
