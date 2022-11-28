import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NonBillableWinningBidStatusRow } from "./nonbillablewinningbidstatusrow";



// ListNonBillableWinningBidsResponse
/** 
 * Response message for listing all reasons for which a buyer was not billed for a winning bid.
**/
export class ListNonBillableWinningBidsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nonBillableWinningBidStatusRows", elemType: NonBillableWinningBidStatusRow })
  nonBillableWinningBidStatusRows?: NonBillableWinningBidStatusRow[];
}
