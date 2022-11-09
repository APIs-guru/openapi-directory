import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiInvoiceAllcategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetApiInvoiceAllcategoriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GetApiInvoiceAllcategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiInvoiceAllcategoriesQueryParams;

  @Metadata()
  headers: GetApiInvoiceAllcategoriesHeaders;
}


export class GetApiInvoiceAllcategoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  listResultInvoiceCategoryApiModel?: shared.ListResultInvoiceCategoryApiModel;

  @Metadata()
  statusCode: number;
}
