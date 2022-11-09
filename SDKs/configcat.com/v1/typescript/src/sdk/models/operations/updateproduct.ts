import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class UpdateProductRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateProductRequest?: shared.UpdateProductRequest;

  @Metadata({ data: "request, media_type=application/json" })
  updateProductRequest1?: shared.UpdateProductRequest;

  @Metadata({ data: "request, media_type=text/json" })
  updateProductRequest2?: shared.UpdateProductRequest;
}


export class UpdateProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProductPathParams;

  @Metadata()
  request: UpdateProductRequests;
}


export class UpdateProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productModel?: shared.ProductModel;

  @Metadata()
  productModelHaljson?: shared.ProductModelHaljson;

  @Metadata()
  statusCode: number;
}
