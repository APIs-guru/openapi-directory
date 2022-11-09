import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvoiceApiUriQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class InvoiceApiUriHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiUriRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: InvoiceApiUriQueryParams;

  @Metadata()
  headers: InvoiceApiUriHeaders;
}


export class InvoiceApiUriResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceUriApiModel?: shared.InvoiceUriApiModel;

  @Metadata()
  statusCode: number;
}
