import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1ProductsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1ProductsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1ProductsIdPathParams;
}


export class GetV1ProductsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productDto?: shared.ProductDto;

  @Metadata()
  statusCode: number;
}
