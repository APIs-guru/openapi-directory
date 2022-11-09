import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CalloutStatusRow } from "./calloutstatusrow";


// ListFilteredBidRequestsResponse
/** 
 * Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
**/
export class ListFilteredBidRequestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=calloutStatusRows", elemType: shared.CalloutStatusRow })
  calloutStatusRows?: CalloutStatusRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
