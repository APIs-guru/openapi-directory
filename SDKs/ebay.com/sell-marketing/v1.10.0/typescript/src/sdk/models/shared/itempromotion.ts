import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { CouponConfiguration } from "./couponconfiguration";
import { DiscountRule } from "./discountrule";
import { InventoryCriterion } from "./inventorycriterion";


// ItemPromotion
/** 
 * This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.
**/
export class ItemPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyDiscountToSingleItemOnly" })
  applyDiscountToSingleItemOnly?: boolean;

  @Metadata({ data: "json, name=budget" })
  budget?: Amount;

  @Metadata({ data: "json, name=couponConfiguration" })
  couponConfiguration?: CouponConfiguration;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discountRules", elemType: shared.DiscountRule })
  discountRules?: DiscountRule[];

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=inventoryCriterion" })
  inventoryCriterion?: InventoryCriterion;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=promotionImageUrl" })
  promotionImageUrl?: string;

  @Metadata({ data: "json, name=promotionStatus" })
  promotionStatus?: string;

  @Metadata({ data: "json, name=promotionType" })
  promotionType?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
