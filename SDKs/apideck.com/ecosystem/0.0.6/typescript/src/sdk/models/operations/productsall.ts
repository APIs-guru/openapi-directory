import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class ProductsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductsAllPathParams;
}


export class ProductsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getProductsResponse?: shared.GetProductsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
