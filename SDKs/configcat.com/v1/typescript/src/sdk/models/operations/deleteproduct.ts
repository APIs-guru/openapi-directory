import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class DeleteProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductPathParams;
}


export class DeleteProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
