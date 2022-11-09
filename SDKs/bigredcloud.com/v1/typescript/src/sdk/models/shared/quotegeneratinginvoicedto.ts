import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SalesInvoiceCreditNoteDto } from "./salesinvoicecreditnotedto";


export class QuoteGeneratingInvoiceDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=quoteId" })
  quoteId?: number;

  @Metadata({ data: "json, name=saleInvoice" })
  saleInvoice?: SalesInvoiceCreditNoteDto;
}
