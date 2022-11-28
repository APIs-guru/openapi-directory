import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ProductsDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class ProductsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: ProductsDeleteQueryParams;
}


export class ProductsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productsDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
