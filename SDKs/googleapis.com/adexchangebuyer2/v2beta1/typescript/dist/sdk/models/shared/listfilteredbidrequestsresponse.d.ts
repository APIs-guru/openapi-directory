import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutStatusRow } from "./calloutstatusrow";
/**
 * Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
**/
export declare class ListFilteredBidRequestsResponse extends SpeakeasyBase {
    calloutStatusRows?: CalloutStatusRow[];
    nextPageToken?: string;
}
