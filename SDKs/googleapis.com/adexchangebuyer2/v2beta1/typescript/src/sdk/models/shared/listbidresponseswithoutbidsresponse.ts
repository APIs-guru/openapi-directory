import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BidResponseWithoutBidsStatusRow } from "./bidresponsewithoutbidsstatusrow";


// ListBidResponsesWithoutBidsResponse
/** 
 * Response message for listing all reasons that bid responses were considered to have no applicable bids.
**/
export class ListBidResponsesWithoutBidsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidResponseWithoutBidsStatusRows", elemType: shared.BidResponseWithoutBidsStatusRow })
  bidResponseWithoutBidsStatusRows?: BidResponseWithoutBidsStatusRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
