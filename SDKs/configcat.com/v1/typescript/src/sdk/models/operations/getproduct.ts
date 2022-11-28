import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductPathParams;
}


export class GetProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productModel?: shared.ProductModel;

  @SpeakeasyMetadata()
  productModelHaljson?: shared.ProductModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
