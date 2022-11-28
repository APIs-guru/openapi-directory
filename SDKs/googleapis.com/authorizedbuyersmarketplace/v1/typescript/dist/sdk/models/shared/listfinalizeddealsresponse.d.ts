import { SpeakeasyBase } from "../../../internal/utils";
import { FinalizedDeal } from "./finalizeddeal";
/**
 * Response message for listing finalized deals.
**/
export declare class ListFinalizedDealsResponse extends SpeakeasyBase {
    finalizedDeals?: FinalizedDeal[];
    nextPageToken?: string;
}
