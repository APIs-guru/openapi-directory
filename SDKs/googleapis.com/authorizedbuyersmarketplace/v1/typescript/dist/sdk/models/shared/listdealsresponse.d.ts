import { SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";
/**
 * Response message for listing deals in a proposal.
**/
export declare class ListDealsResponse extends SpeakeasyBase {
    deals?: Deal[];
    nextPageToken?: string;
}
