import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsUpdateReviewCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsUpdateReviewCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class PullsUpdateReviewCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsUpdateReviewCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateReviewCommentRequestBody;
}


export class PullsUpdateReviewCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pullRequestReviewComment?: shared.PullRequestReviewComment;
}
