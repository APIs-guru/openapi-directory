import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductCouponApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidUntil" })
  validUntil?: Date;
}
