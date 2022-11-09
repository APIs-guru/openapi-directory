import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductItemApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cost" })
  cost?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=MinimumQuantity" })
  minimumQuantity?: number;

  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=TaxId" })
  taxId?: number;

  @Metadata({ data: "json, name=TaxPercentage" })
  taxPercentage?: number;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=WorkTypeId" })
  workTypeId?: number;
}
