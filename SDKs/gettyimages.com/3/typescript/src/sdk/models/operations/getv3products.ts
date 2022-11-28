import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3ProductsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.ProductFieldValuesEnum[];
}


export class GetV3ProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3ProductsQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3ProductsHeaders;
}


export class GetV3ProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productsResult?: shared.ProductsResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
