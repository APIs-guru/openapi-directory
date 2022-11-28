import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteV3BoardsBoardIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class DeleteV3BoardsBoardIdCommentsCommentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV3BoardsBoardIdCommentsCommentIdPathParams;
}


export class DeleteV3BoardsBoardIdCommentsCommentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
