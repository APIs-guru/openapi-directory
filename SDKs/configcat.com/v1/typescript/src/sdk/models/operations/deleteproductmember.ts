import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteProductMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductMemberPathParams;
}


export class DeleteProductMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
