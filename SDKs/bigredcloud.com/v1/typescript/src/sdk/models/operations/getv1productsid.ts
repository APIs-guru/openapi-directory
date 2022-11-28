import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1ProductsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1ProductsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1ProductsIdPathParams;
}


export class GetV1ProductsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productDto?: shared.ProductDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
