import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalloutStatusRow } from "./calloutstatusrow";



// ListFilteredBidRequestsResponse
/** 
 * Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
**/
export class ListFilteredBidRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calloutStatusRows", elemType: CalloutStatusRow })
  calloutStatusRows?: CalloutStatusRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
