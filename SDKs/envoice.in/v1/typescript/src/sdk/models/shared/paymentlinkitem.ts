import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Tax } from "./tax";
import { WorkType } from "./worktype";


export class PaymentLinkItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cost" })
  cost?: number;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=PaymentLinkId" })
  paymentLinkId?: number;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=Tax" })
  tax?: Tax;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=TaxId" })
  taxId?: number;

  @Metadata({ data: "json, name=TaxPercentage" })
  taxPercentage?: number;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=WorkType" })
  workType?: WorkType;

  @Metadata({ data: "json, name=WorkTypeId" })
  workTypeId?: number;
}
