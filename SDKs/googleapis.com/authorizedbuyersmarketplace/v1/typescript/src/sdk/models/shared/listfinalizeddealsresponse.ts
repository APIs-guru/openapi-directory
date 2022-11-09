import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FinalizedDeal } from "./finalizeddeal";


// ListFinalizedDealsResponse
/** 
 * Response message for listing finalized deals.
**/
export class ListFinalizedDealsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalizedDeals", elemType: shared.FinalizedDeal })
  finalizedDeals?: FinalizedDeal[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
