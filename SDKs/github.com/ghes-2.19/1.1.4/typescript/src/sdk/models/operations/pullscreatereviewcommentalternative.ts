import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsCreateReviewCommentAlternativePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCreateReviewCommentAlternativeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=in_reply_to" })
  inReplyTo?: number;
}


export class PullsCreateReviewCommentAlternativeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsCreateReviewCommentAlternativePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsCreateReviewCommentAlternativeRequestBody;
}


export class PullsCreateReviewCommentAlternativeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyReviewComment?: shared.LegacyReviewComment;
}
