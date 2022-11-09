import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ProductsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductsPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductDto;
}


export class ProductsPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
