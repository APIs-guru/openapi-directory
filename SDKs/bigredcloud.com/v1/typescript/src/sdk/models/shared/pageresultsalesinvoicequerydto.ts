import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesInvoiceQueryDto } from "./salesinvoicequerydto";



export class PageResultSalesInvoiceQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SalesInvoiceQueryDto })
  items?: SalesInvoiceQueryDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
