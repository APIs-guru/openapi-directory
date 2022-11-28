import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CouponConfiguration } from "./couponconfiguration";
import { DiscountRule } from "./discountrule";
import { InventoryCriterion } from "./inventorycriterion";
/**
 * This complex type defines the fields returned for an item (threshold) promotion.
**/
export declare class ItemPromotionResponse extends SpeakeasyBase {
    applyDiscountToSingleItemOnly?: boolean;
    budget?: Amount;
    couponConfiguration?: CouponConfiguration;
    description?: string;
    discountRules?: DiscountRule[];
    endDate?: string;
    inventoryCriterion?: InventoryCriterion;
    marketplaceId?: string;
    name?: string;
    priority?: string;
    promotionId?: string;
    promotionImageUrl?: string;
    promotionStatus?: string;
    promotionType?: string;
    startDate?: string;
}
