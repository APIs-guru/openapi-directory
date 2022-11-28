import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesInvoiceCreditNoteDto } from "./salesinvoicecreditnotedto";



export class QuoteGeneratingInvoiceDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId?: number;

  @SpeakeasyMetadata({ data: "json, name=saleInvoice" })
  saleInvoice?: SalesInvoiceCreditNoteDto;
}
