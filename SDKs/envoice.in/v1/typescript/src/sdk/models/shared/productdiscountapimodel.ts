import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductDiscountApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ValidFrom" })
  validFrom?: Date;

  @Metadata({ data: "json, name=ValidTo" })
  validTo?: Date;
}
