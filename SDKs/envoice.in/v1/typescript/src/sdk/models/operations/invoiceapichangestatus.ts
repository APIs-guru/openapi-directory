import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvoiceApiChangeStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiChangeStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  changeStatusApiModel?: shared.ChangeStatusApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  changeStatusApiModel1?: shared.ChangeStatusApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  changeStatusApiModel2?: shared.ChangeStatusApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiChangeStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: InvoiceApiChangeStatusHeaders;

  @Metadata()
  request: InvoiceApiChangeStatusRequests;
}


export class InvoiceApiChangeStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceApiChangeStatus200ApplicationJsonBoolean?: boolean;

  @Metadata()
  invoiceApiChangeStatus200TextJsonBoolean?: boolean;

  @Metadata()
  statusCode: number;
}
