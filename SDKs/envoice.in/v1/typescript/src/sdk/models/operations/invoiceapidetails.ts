import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvoiceApiDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class InvoiceApiDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: InvoiceApiDetailsQueryParams;

  @Metadata()
  headers: InvoiceApiDetailsHeaders;
}


export class InvoiceApiDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;

  @Metadata()
  statusCode: number;
}
