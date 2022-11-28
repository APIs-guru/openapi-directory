import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiChangeStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiChangeStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeStatusApiModel?: shared.ChangeStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  changeStatusApiModel1?: shared.ChangeStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeStatusApiModel2?: shared.ChangeStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class InvoiceApiChangeStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: InvoiceApiChangeStatusHeaders;

  @SpeakeasyMetadata()
  request: InvoiceApiChangeStatusRequests;
}


export class InvoiceApiChangeStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceApiChangeStatus200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  invoiceApiChangeStatus200TextJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  statusCode: number;
}
