import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNodeCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;
}


export class UpdateNodeCommentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateNodeCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNodeCommentPathParams;

  @SpeakeasyMetadata()
  headers: UpdateNodeCommentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeNodeCommentRequest;
}


export class UpdateNodeCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: shared.Comment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
