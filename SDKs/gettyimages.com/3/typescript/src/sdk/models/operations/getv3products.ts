import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ProductsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ProductFieldValuesEnum[];
}


export class GetV3ProductsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ProductsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3ProductsQueryParams;

  @Metadata()
  headers: GetV3ProductsHeaders;
}


export class GetV3ProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsResult?: shared.ProductsResult;

  @Metadata()
  statusCode: number;
}
