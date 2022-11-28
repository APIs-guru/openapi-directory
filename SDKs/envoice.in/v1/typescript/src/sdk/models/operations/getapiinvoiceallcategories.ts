import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiInvoiceAllcategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetApiInvoiceAllcategoriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GetApiInvoiceAllcategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiInvoiceAllcategoriesQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiInvoiceAllcategoriesHeaders;
}


export class GetApiInvoiceAllcategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResultInvoiceCategoryApiModel?: shared.ListResultInvoiceCategoryApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
