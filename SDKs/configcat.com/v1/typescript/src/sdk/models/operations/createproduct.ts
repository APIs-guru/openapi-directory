import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateProductRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createProductRequest?: shared.CreateProductRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createProductRequest1?: shared.CreateProductRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createProductRequest2?: shared.CreateProductRequest;
}


export class CreateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProductPathParams;

  @SpeakeasyMetadata()
  request: CreateProductRequests;
}


export class CreateProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productModel?: shared.ProductModel;

  @SpeakeasyMetadata()
  productModelHaljson?: shared.ProductModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
