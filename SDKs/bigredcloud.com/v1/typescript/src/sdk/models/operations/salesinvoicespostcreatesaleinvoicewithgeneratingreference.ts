import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceCreditNoteDto;
}


export class SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoicesPostCreateSaleInvoiceWithGeneratingReference200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
