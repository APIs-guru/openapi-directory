import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutStatusRow } from "./calloutstatusrow";
/**
 * Response message for listing all reasons that bid responses resulted in an error.
**/
export declare class ListBidResponseErrorsResponse extends SpeakeasyBase {
    calloutStatusRows?: CalloutStatusRow[];
    nextPageToken?: string;
}
