import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeStatusRow } from "./creativestatusrow";



// ListLosingBidsResponse
/** 
 * Response message for listing all reasons that bids lost in the auction.
**/
export class ListLosingBidsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeStatusRows", elemType: CreativeStatusRow })
  creativeStatusRows?: CreativeStatusRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
