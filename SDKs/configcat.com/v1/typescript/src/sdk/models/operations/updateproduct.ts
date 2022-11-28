import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class UpdateProductRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateProductRequest?: shared.UpdateProductRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateProductRequest1?: shared.UpdateProductRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateProductRequest2?: shared.UpdateProductRequest;
}


export class UpdateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProductPathParams;

  @SpeakeasyMetadata()
  request: UpdateProductRequests;
}


export class UpdateProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productModel?: shared.ProductModel;

  @SpeakeasyMetadata()
  productModelHaljson?: shared.ProductModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
