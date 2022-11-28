import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiSendToAccountantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiSendToAccountantRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sendInvoiceToAccountantApiModel?: shared.SendInvoiceToAccountantApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sendInvoiceToAccountantApiModel1?: shared.SendInvoiceToAccountantApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  sendInvoiceToAccountantApiModel2?: shared.SendInvoiceToAccountantApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiSendToAccountantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: InvoiceApiSendToAccountantHeaders;

  @SpeakeasyMetadata()
  request: InvoiceApiSendToAccountantRequests;
}


export class InvoiceApiSendToAccountantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceApiSendToAccountant200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  invoiceApiSendToAccountant200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
