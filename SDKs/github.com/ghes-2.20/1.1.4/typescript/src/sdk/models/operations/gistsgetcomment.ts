import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsGetCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsGetComment403ApplicationJsonBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class GistsGetComment403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block" })
  block?: GistsGetComment403ApplicationJsonBlock;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GistsGetCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsGetCommentPathParams;
}


export class GistsGetCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gistComment?: shared.GistComment;

  @SpeakeasyMetadata()
  gistsGetComment403ApplicationJsonObject?: GistsGetComment403ApplicationJson;
}
