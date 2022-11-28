import { SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";
/**
 * Response message for listing proposals.
**/
export declare class ListProposalsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    proposals?: Proposal[];
}
