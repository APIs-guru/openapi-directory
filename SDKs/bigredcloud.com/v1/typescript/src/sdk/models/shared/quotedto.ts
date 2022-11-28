import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcudfValueDto } from "./acudfvaluedto";
import { QuoteProductTransDto } from "./quoteproducttransdto";



export class QuoteDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acCode" })
  acCode?: string;

  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: number;

  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto })
  customFields?: AcudfValueDto[];

  @SpeakeasyMetadata({ data: "json, name=customerOwnerId" })
  customerOwnerId?: number;

  @SpeakeasyMetadata({ data: "json, name=customerOwnerName" })
  customerOwnerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ddNumber" })
  ddNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryList" })
  deliveryList?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryTo" })
  deliveryTo?: string[];

  @SpeakeasyMetadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=layoutType" })
  layoutType?: number;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=poNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=procDate" })
  procDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=productTrans", elemType: QuoteProductTransDto })
  productTrans?: QuoteProductTransDto[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=saleInvoiceId" })
  saleInvoiceId?: number;

  @SpeakeasyMetadata({ data: "json, name=saleRepCode" })
  saleRepCode?: string;

  @SpeakeasyMetadata({ data: "json, name=saleRepId" })
  saleRepId?: number;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalNet" })
  totalNet?: number;

  @SpeakeasyMetadata({ data: "json, name=totalVat" })
  totalVat?: number;

  @SpeakeasyMetadata({ data: "json, name=vatTypeId" })
  vatTypeId?: number;
}
