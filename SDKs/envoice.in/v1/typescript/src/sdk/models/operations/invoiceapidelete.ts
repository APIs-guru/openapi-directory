import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  invoiceDeleteApiModel?: shared.InvoiceDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceDeleteApiModel1?: shared.InvoiceDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  invoiceDeleteApiModel2?: shared.InvoiceDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: InvoiceApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: InvoiceApiDeleteRequests;
}


export class InvoiceApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  invoiceApiDelete200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
