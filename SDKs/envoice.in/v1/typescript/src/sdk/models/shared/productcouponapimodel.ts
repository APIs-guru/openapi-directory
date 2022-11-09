import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductCouponApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=ValidUntil" })
  validUntil?: Date;
}
