import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvoiceApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  invoiceDeleteApiModel?: shared.InvoiceDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceDeleteApiModel1?: shared.InvoiceDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  invoiceDeleteApiModel2?: shared.InvoiceDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: InvoiceApiDeleteHeaders;

  @Metadata()
  request: InvoiceApiDeleteRequests;
}


export class InvoiceApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  invoiceApiDelete200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
