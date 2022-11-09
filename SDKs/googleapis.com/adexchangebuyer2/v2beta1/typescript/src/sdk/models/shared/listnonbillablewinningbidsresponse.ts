import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NonBillableWinningBidStatusRow } from "./nonbillablewinningbidstatusrow";


// ListNonBillableWinningBidsResponse
/** 
 * Response message for listing all reasons for which a buyer was not billed for a winning bid.
**/
export class ListNonBillableWinningBidsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nonBillableWinningBidStatusRows", elemType: shared.NonBillableWinningBidStatusRow })
  nonBillableWinningBidStatusRows?: NonBillableWinningBidStatusRow[];
}
