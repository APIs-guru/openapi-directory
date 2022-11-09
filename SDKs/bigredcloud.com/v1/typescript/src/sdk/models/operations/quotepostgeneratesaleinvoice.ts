import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuotePostGenerateSaleInvoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.QuoteGeneratingInvoiceDto;
}


export class QuotePostGenerateSaleInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quotePostGenerateSaleInvoice200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
