import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsGetCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsGetCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsGetCommentPathParams;
}


export class GistsGetComment403ApplicationJsonBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class GistsGetComment403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=block" })
  block?: GistsGetComment403ApplicationJsonBlock;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GistsGetCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistComment?: shared.GistComment;

  @Metadata()
  gistsGetComment403ApplicationJsonObject?: GistsGetComment403ApplicationJson;
}
