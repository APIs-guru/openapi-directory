import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductDiscountApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidFrom" })
  validFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=ValidTo" })
  validTo?: Date;
}
