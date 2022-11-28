import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectDeal } from "./directdeal";



// DirectDealsList
/** 
 * A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
**/
export class DirectDealsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directDeals", elemType: DirectDeal })
  directDeals?: DirectDeal[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
