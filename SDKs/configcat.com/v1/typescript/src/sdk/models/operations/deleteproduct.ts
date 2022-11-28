import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class DeleteProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductPathParams;
}


export class DeleteProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
