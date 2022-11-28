import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PromotionDetail
/** 
 * This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.
**/
export class PromotionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=couponCode" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionHref" })
  promotionHref?: string;

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
