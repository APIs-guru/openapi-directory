import { SpeakeasyBase } from "../../../internal/utils";
import { DirectDeal } from "./directdeal";
/**
 * A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
**/
export declare class DirectDealsList extends SpeakeasyBase {
    directDeals?: DirectDeal[];
    kind?: string;
}
