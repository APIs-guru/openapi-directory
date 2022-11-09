import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvoiceApiSendToAccountantHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiSendToAccountantRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  sendInvoiceToAccountantApiModel?: shared.SendInvoiceToAccountantApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sendInvoiceToAccountantApiModel1?: shared.SendInvoiceToAccountantApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  sendInvoiceToAccountantApiModel2?: shared.SendInvoiceToAccountantApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiSendToAccountantRequest extends SpeakeasyBase {
  @Metadata()
  headers: InvoiceApiSendToAccountantHeaders;

  @Metadata()
  request: InvoiceApiSendToAccountantRequests;
}


export class InvoiceApiSendToAccountantResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceApiSendToAccountant200ApplicationJsonInt32Integer?: number;

  @Metadata()
  invoiceApiSendToAccountant200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
