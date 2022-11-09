import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteV3BoardsBoardIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class DeleteV3BoardsBoardIdCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteV3BoardsBoardIdCommentsCommentIdPathParams;
}


export class DeleteV3BoardsBoardIdCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
