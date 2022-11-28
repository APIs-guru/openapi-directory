import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BidResponseWithoutBidsStatusRow } from "./bidresponsewithoutbidsstatusrow";



// ListBidResponsesWithoutBidsResponse
/** 
 * Response message for listing all reasons that bid responses were considered to have no applicable bids.
**/
export class ListBidResponsesWithoutBidsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidResponseWithoutBidsStatusRows", elemType: BidResponseWithoutBidsStatusRow })
  bidResponseWithoutBidsStatusRows?: BidResponseWithoutBidsStatusRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
