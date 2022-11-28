import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class InvoiceApiDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InvoiceApiDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: InvoiceApiDetailsHeaders;
}


export class InvoiceApiDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
