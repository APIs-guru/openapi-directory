import { SpeakeasyBase } from "../../../internal/utils";
import { PromotionDetail } from "./promotiondetail";
/**
 * This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
**/
export declare class PromotionsPagedCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    promotions?: PromotionDetail[];
    total?: number;
}
