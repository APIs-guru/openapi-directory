import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFileCommentReactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFileCommentReactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFileCommentReactionsIdPathParams;
}


export class DeleteFileCommentReactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
