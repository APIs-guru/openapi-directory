import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiSendToClientHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiSendToClientRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sendInvoiceToClientApiModel?: shared.SendInvoiceToClientApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sendInvoiceToClientApiModel1?: shared.SendInvoiceToClientApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  sendInvoiceToClientApiModel2?: shared.SendInvoiceToClientApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiSendToClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: InvoiceApiSendToClientHeaders;

  @SpeakeasyMetadata()
  request: InvoiceApiSendToClientRequests;
}


export class InvoiceApiSendToClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceApiSendToClient200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  invoiceApiSendToClient200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
