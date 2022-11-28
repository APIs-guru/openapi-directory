import { SpeakeasyBase } from "../../../internal/utils";
import { EligibleItem } from "./eligibleitem";
/**
 * This complex type defines a collection of listings that are eligible for an offer to a buyer.
**/
export declare class PagedEligibleItemCollection extends SpeakeasyBase {
    eligibleItems?: EligibleItem[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
