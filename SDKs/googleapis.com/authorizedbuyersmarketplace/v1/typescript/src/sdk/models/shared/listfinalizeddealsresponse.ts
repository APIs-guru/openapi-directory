import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FinalizedDeal } from "./finalizeddeal";



// ListFinalizedDealsResponse
/** 
 * Response message for listing finalized deals.
**/
export class ListFinalizedDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalizedDeals", elemType: FinalizedDeal })
  finalizedDeals?: FinalizedDeal[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
