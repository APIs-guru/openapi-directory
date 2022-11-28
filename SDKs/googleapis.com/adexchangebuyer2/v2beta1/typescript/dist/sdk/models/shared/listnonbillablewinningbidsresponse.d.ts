import { SpeakeasyBase } from "../../../internal/utils";
import { NonBillableWinningBidStatusRow } from "./nonbillablewinningbidstatusrow";
/**
 * Response message for listing all reasons for which a buyer was not billed for a winning bid.
**/
export declare class ListNonBillableWinningBidsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    nonBillableWinningBidStatusRows?: NonBillableWinningBidStatusRow[];
}
