import { SpeakeasyBase } from "../../../internal/utils";
import { PromotionReportDetail } from "./promotionreportdetail";
/**
 * This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
**/
export declare class PromotionsReportPagedCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    promotionReports?: PromotionReportDetail[];
    total?: number;
}
