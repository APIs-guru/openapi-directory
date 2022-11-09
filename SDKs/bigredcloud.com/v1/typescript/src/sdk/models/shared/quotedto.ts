import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcudfValueDto } from "./acudfvaluedto";
import { QuoteProductTransDto } from "./quoteproducttransdto";


export class QuoteDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=acCode" })
  acCode?: string;

  @Metadata({ data: "json, name=closedDate" })
  closedDate?: Date;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=companyId" })
  companyId?: number;

  @Metadata({ data: "json, name=customFields", elemType: shared.AcudfValueDto })
  customFields?: AcudfValueDto[];

  @Metadata({ data: "json, name=customerOwnerId" })
  customerOwnerId?: number;

  @Metadata({ data: "json, name=customerOwnerName" })
  customerOwnerName?: string;

  @Metadata({ data: "json, name=ddNumber" })
  ddNumber?: string;

  @Metadata({ data: "json, name=deliveryList" })
  deliveryList?: string;

  @Metadata({ data: "json, name=deliveryTo" })
  deliveryTo?: string[];

  @Metadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=layoutType" })
  layoutType?: number;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=poNumber" })
  poNumber?: string;

  @Metadata({ data: "json, name=procDate" })
  procDate?: Date;

  @Metadata({ data: "json, name=productTrans", elemType: shared.QuoteProductTransDto })
  productTrans?: QuoteProductTransDto[];

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=saleInvoiceId" })
  saleInvoiceId?: number;

  @Metadata({ data: "json, name=saleRepCode" })
  saleRepCode?: string;

  @Metadata({ data: "json, name=saleRepId" })
  saleRepId?: number;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalNet" })
  totalNet?: number;

  @Metadata({ data: "json, name=totalVat" })
  totalVat?: number;

  @Metadata({ data: "json, name=vatTypeId" })
  vatTypeId?: number;
}
