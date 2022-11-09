import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PromotionDetail
/** 
 * This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.
**/
export class PromotionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=couponCode" })
  couponCode?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=promotionHref" })
  promotionHref?: string;

  @Metadata({ data: "json, name=promotionId" })
  promotionId?: string;

  @Metadata({ data: "json, name=promotionImageUrl" })
  promotionImageUrl?: string;

  @Metadata({ data: "json, name=promotionStatus" })
  promotionStatus?: string;

  @Metadata({ data: "json, name=promotionType" })
  promotionType?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
