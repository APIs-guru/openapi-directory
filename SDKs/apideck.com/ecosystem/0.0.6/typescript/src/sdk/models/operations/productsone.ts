import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductsOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ProductsOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductsOnePathParams;
}


export class ProductsOneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getProductResponse?: shared.GetProductResponse;

  @Metadata()
  statusCode: number;
}
