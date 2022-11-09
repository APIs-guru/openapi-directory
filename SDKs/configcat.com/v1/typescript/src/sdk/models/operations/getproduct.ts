import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductPathParams;
}


export class GetProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productModel?: shared.ProductModel;

  @Metadata()
  productModelHaljson?: shared.ProductModelHaljson;

  @Metadata()
  statusCode: number;
}
