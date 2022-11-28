import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductsOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ProductsOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductsOnePathParams;
}


export class ProductsOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getProductResponse?: shared.GetProductResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
