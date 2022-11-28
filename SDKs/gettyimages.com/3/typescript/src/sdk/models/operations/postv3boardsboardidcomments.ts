import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV3BoardsBoardIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PostV3BoardsBoardIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV3BoardsBoardIdCommentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CommentRequest;
}


export class PostV3BoardsBoardIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentCreated?: shared.CommentCreated;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
