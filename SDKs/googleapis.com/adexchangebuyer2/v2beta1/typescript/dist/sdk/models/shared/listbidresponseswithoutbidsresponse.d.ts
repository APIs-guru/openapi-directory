import { SpeakeasyBase } from "../../../internal/utils";
import { BidResponseWithoutBidsStatusRow } from "./bidresponsewithoutbidsstatusrow";
/**
 * Response message for listing all reasons that bid responses were considered to have no applicable bids.
**/
export declare class ListBidResponsesWithoutBidsResponse extends SpeakeasyBase {
    bidResponseWithoutBidsStatusRows?: BidResponseWithoutBidsStatusRow[];
    nextPageToken?: string;
}
