import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ProductsDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class ProductsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductsDeletePathParams;

  @Metadata()
  queryParams: ProductsDeleteQueryParams;
}


export class ProductsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
