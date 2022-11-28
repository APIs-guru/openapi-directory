import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiUriQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class InvoiceApiUriHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiUriRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InvoiceApiUriQueryParams;

  @SpeakeasyMetadata()
  headers: InvoiceApiUriHeaders;
}


export class InvoiceApiUriResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceUriApiModel?: shared.InvoiceUriApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
