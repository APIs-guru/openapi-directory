import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeStatusRow } from "./creativestatusrow";


// ListFilteredBidsResponse
/** 
 * Response message for listing all reasons that bids were filtered from the auction.
**/
export class ListFilteredBidsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeStatusRows", elemType: shared.CreativeStatusRow })
  creativeStatusRows?: CreativeStatusRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
