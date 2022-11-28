import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcudfValueDto } from "./acudfvaluedto";
import { ProductTranQueryDto } from "./producttranquerydto";



export class SalesInvoiceQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acCode" })
  acCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto })
  customFields?: AcudfValueDto[];

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveryTo" })
  deliveryTo?: string[];

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=loType" })
  loType?: string;

  @SpeakeasyMetadata({ data: "json, name=netGoods" })
  netGoods?: number;

  @SpeakeasyMetadata({ data: "json, name=netServices" })
  netServices?: number;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=ourReference" })
  ourReference?: string;

  @SpeakeasyMetadata({ data: "json, name=procDate" })
  procDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=productTrans", elemType: ProductTranQueryDto })
  productTrans?: ProductTranQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId?: number;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=saleRepCode" })
  saleRepCode?: string;

  @SpeakeasyMetadata({ data: "json, name=saleRepId" })
  saleRepId?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalNet" })
  totalNet?: number;

  @SpeakeasyMetadata({ data: "json, name=totalVAT" })
  totalVat?: number;

  @SpeakeasyMetadata({ data: "json, name=unpaid" })
  unpaid?: number;

  @SpeakeasyMetadata({ data: "json, name=vatTypeId" })
  vatTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=yourReference" })
  yourReference?: string;
}
