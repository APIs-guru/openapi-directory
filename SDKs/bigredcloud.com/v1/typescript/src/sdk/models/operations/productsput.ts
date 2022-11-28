import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ProductsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductsPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductDto;
}


export class ProductsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productsPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
