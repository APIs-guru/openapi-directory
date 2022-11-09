import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodeCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;
}


export class UpdateNodeCommentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateNodeCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodeCommentPathParams;

  @Metadata()
  headers: UpdateNodeCommentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChangeNodeCommentRequest;
}


export class UpdateNodeCommentResponse extends SpeakeasyBase {
  @Metadata()
  comment?: shared.Comment;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
