import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeStatusRow } from "./creativestatusrow";
/**
 * Response message for listing all reasons that bids were filtered from the auction.
**/
export declare class ListFilteredBidsResponse extends SpeakeasyBase {
    creativeStatusRows?: CreativeStatusRow[];
    nextPageToken?: string;
}
