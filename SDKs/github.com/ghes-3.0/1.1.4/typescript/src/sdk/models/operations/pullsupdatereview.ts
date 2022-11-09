import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsUpdateReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=review_id" })
  reviewId: number;
}


export class PullsUpdateReviewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class PullsUpdateReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsUpdateReviewPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsUpdateReviewRequestBody;
}


export class PullsUpdateReviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pullRequestReview?: shared.PullRequestReview;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
