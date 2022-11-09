import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsCreateReviewCommentAlternativePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCreateReviewCommentAlternativeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=in_reply_to" })
  inReplyTo?: number;
}


export class PullsCreateReviewCommentAlternativeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsCreateReviewCommentAlternativePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsCreateReviewCommentAlternativeRequestBody;
}


export class PullsCreateReviewCommentAlternativeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyReviewComment?: shared.LegacyReviewComment;
}
