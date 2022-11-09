import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsUpdateCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsUpdateCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class GistsUpdateCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsUpdateCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GistsUpdateCommentRequestBody;
}


export class GistsUpdateCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistComment?: shared.GistComment;
}
