import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderItemApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductItemId" })
  productItemId?: number;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxId" })
  taxId?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkTypeId" })
  workTypeId?: number;
}
