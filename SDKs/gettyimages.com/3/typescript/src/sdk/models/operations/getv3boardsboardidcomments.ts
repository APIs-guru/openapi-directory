import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3BoardsBoardIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class GetV3BoardsBoardIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3BoardsBoardIdCommentsPathParams;
}


export class GetV3BoardsBoardIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentsList?: shared.CommentsList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
