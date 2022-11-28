import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvoiceApiAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;
}


export class InvoiceApiAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InvoiceApiAllQueryParams;

  @SpeakeasyMetadata()
  headers: InvoiceApiAllHeaders;
}


export class InvoiceApiAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResultInvoiceDetailsApiModel?: shared.ListResultInvoiceDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
