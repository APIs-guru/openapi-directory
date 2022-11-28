import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CouponConfiguration } from "./couponconfiguration";
import { DiscountRule } from "./discountrule";
import { InventoryCriterion } from "./inventorycriterion";
/**
 * This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.
**/
export declare class ItemPromotion extends SpeakeasyBase {
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
    promotionImageUrl?: string;
    promotionStatus?: string;
    promotionType?: string;
    startDate?: string;
}
