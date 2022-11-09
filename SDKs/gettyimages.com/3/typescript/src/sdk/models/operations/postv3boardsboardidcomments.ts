import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV3BoardsBoardIdCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PostV3BoardsBoardIdCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV3BoardsBoardIdCommentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CommentRequest;
}


export class PostV3BoardsBoardIdCommentsResponse extends SpeakeasyBase {
  @Metadata()
  commentCreated?: shared.CommentCreated;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
