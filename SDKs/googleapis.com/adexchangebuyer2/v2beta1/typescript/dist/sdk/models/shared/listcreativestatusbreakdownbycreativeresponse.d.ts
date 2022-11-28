import { SpeakeasyBase } from "../../../internal/utils";
import { FilteredBidCreativeRow } from "./filteredbidcreativerow";
/**
 * Response message for listing all creatives associated with a given filtered bid reason.
**/
export declare class ListCreativeStatusBreakdownByCreativeResponse extends SpeakeasyBase {
    filteredBidCreativeRows?: FilteredBidCreativeRow[];
    nextPageToken?: string;
}
