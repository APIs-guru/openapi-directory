import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CouponConfiguration } from "./couponconfiguration";
import { DiscountRule } from "./discountrule";
import { InventoryCriterion } from "./inventorycriterion";



// ItemPromotionResponse
/** 
 * This complex type defines the fields returned for an item (threshold) promotion.
**/
export class ItemPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyDiscountToSingleItemOnly" })
  applyDiscountToSingleItemOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=budget" })
  budget?: Amount;

  @SpeakeasyMetadata({ data: "json, name=couponConfiguration" })
  couponConfiguration?: CouponConfiguration;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountRules", elemType: DiscountRule })
  discountRules?: DiscountRule[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryCriterion" })
  inventoryCriterion?: InventoryCriterion;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionImageUrl" })
  promotionImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionStatus" })
  promotionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionType" })
  promotionType?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
