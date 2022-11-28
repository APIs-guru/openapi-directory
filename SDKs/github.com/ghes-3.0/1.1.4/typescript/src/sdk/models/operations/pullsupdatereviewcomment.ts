import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsUpdateReviewCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsUpdateReviewCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class PullsUpdateReviewCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsUpdateReviewCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateReviewCommentRequestBody;
}


export class PullsUpdateReviewCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pullRequestReviewComment?: shared.PullRequestReviewComment;
}
