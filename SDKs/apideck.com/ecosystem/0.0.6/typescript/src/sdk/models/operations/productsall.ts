import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class ProductsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductsAllPathParams;
}


export class ProductsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getProductsResponse?: shared.GetProductsResponse;

  @Metadata()
  statusCode: number;
}
