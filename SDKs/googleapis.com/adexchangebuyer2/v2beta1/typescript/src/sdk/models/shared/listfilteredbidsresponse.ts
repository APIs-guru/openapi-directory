import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeStatusRow } from "./creativestatusrow";



// ListFilteredBidsResponse
/** 
 * Response message for listing all reasons that bids were filtered from the auction.
**/
export class ListFilteredBidsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeStatusRows", elemType: CreativeStatusRow })
  creativeStatusRows?: CreativeStatusRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
