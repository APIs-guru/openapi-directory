import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsCreateCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsCreateCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class GistsCreateCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsCreateCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GistsCreateCommentRequestBody;
}


export class GistsCreateCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistComment?: shared.GistComment;
}
