import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvoiceApiSendToClientHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiSendToClientRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  sendInvoiceToClientApiModel?: shared.SendInvoiceToClientApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sendInvoiceToClientApiModel1?: shared.SendInvoiceToClientApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  sendInvoiceToClientApiModel2?: shared.SendInvoiceToClientApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiSendToClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: InvoiceApiSendToClientHeaders;

  @Metadata()
  request: InvoiceApiSendToClientRequests;
}


export class InvoiceApiSendToClientResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceApiSendToClient200ApplicationJsonInt32Integer?: number;

  @Metadata()
  invoiceApiSendToClient200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
