import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.
**/
export declare class PromotionDetail extends SpeakeasyBase {
    couponCode?: string;
    description?: string;
    endDate?: string;
    marketplaceId?: string;
    name?: string;
    priority?: string;
    promotionHref?: string;
    promotionId?: string;
    promotionImageUrl?: string;
    promotionStatus?: string;
    promotionType?: string;
    startDate?: string;
}
