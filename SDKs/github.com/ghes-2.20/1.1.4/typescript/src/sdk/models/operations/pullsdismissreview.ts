import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsDismissReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=review_id" })
  reviewId: number;
}


export class PullsDismissReviewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event?: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PullsDismissReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsDismissReviewPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsDismissReviewRequestBody;
}


export class PullsDismissReviewResponse extends SpeakeasyBase {
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
