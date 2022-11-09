import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeStatusRow } from "./creativestatusrow";


// ListLosingBidsResponse
/** 
 * Response message for listing all reasons that bids lost in the auction.
**/
export class ListLosingBidsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeStatusRows", elemType: shared.CreativeStatusRow })
  creativeStatusRows?: CreativeStatusRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
