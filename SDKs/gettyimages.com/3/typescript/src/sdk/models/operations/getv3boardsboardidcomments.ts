import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3BoardsBoardIdCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class GetV3BoardsBoardIdCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3BoardsBoardIdCommentsPathParams;
}


export class GetV3BoardsBoardIdCommentsResponse extends SpeakeasyBase {
  @Metadata()
  commentsList?: shared.CommentsList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
