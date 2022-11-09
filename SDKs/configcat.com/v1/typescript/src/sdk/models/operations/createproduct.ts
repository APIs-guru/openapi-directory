import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class CreateProductRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createProductRequest?: shared.CreateProductRequest;

  @Metadata({ data: "request, media_type=application/json" })
  createProductRequest1?: shared.CreateProductRequest;

  @Metadata({ data: "request, media_type=text/json" })
  createProductRequest2?: shared.CreateProductRequest;
}


export class CreateProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProductPathParams;

  @Metadata()
  request: CreateProductRequests;
}


export class CreateProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productModel?: shared.ProductModel;

  @Metadata()
  productModelHaljson?: shared.ProductModelHaljson;

  @Metadata()
  statusCode: number;
}
