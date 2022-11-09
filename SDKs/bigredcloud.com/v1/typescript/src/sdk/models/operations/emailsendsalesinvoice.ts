import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EmailSendSalesInvoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceEmailInfoDto;
}


export class EmailSendSalesInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  emailSendSalesInvoice200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
