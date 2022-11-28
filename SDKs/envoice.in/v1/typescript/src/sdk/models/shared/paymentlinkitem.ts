import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tax } from "./tax";
import { WorkType } from "./worktype";



export class PaymentLinkItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentLinkId" })
  paymentLinkId?: number;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Tax" })
  tax?: Tax;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxId" })
  taxId?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkType" })
  workType?: WorkType;

  @SpeakeasyMetadata({ data: "json, name=WorkTypeId" })
  workTypeId?: number;
}
