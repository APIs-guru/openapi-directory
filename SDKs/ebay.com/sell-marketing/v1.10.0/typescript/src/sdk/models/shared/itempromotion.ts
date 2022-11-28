import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CouponConfiguration } from "./couponconfiguration";
import { DiscountRule } from "./discountrule";
import { InventoryCriterion } from "./inventorycriterion";



// ItemPromotion
/** 
 * This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.
**/
export class ItemPromotion extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=promotionImageUrl" })
  promotionImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionStatus" })
  promotionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionType" })
  promotionType?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
