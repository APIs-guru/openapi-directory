import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeStatusRow } from "./creativestatusrow";
/**
 * Response message for listing all reasons that bids lost in the auction.
**/
export declare class ListLosingBidsResponse extends SpeakeasyBase {
    creativeStatusRows?: CreativeStatusRow[];
    nextPageToken?: string;
}
