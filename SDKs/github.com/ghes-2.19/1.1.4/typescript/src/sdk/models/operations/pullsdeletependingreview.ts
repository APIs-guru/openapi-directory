import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsDeletePendingReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=review_id" })
  reviewId: number;
}


export class PullsDeletePendingReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsDeletePendingReviewPathParams;
}


export class PullsDeletePendingReviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequestReview?: shared.PullRequestReview;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
