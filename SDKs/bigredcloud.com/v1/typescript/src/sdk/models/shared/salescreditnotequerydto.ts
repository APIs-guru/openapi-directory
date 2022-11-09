import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcudfValueDto } from "./acudfvaluedto";
import { ProductTranQueryDto } from "./producttranquerydto";


export class SalesCreditNoteQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=acCode" })
  acCode?: string;

  @Metadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @Metadata({ data: "json, name=customFields", elemType: shared.AcudfValueDto })
  customFields?: AcudfValueDto[];

  @Metadata({ data: "json, name=customerId" })
  customerId?: number;

  @Metadata({ data: "json, name=deliveryTo" })
  deliveryTo?: string[];

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=loType" })
  loType?: string;

  @Metadata({ data: "json, name=netGoods" })
  netGoods?: number;

  @Metadata({ data: "json, name=netServices" })
  netServices?: number;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=ourReference" })
  ourReference?: string;

  @Metadata({ data: "json, name=procDate" })
  procDate?: Date;

  @Metadata({ data: "json, name=productTrans", elemType: shared.ProductTranQueryDto })
  productTrans?: ProductTranQueryDto[];

  @Metadata({ data: "json, name=quoteId" })
  quoteId?: number;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=saleRepCode" })
  saleRepCode?: string;

  @Metadata({ data: "json, name=saleRepId" })
  saleRepId?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalNet" })
  totalNet?: number;

  @Metadata({ data: "json, name=totalVAT" })
  totalVat?: number;

  @Metadata({ data: "json, name=unpaid" })
  unpaid?: number;

  @Metadata({ data: "json, name=vatTypeId" })
  vatTypeId?: number;

  @Metadata({ data: "json, name=yourReference" })
  yourReference?: string;
}
