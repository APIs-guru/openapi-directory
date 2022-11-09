import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMessageCommentReactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessageCommentReactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMessageCommentReactionsIdPathParams;
}


export class DeleteMessageCommentReactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
