import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectDeal } from "./directdeal";


// DirectDealsList
/** 
 * A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
**/
export class DirectDealsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=directDeals", elemType: shared.DirectDeal })
  directDeals?: DirectDeal[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
