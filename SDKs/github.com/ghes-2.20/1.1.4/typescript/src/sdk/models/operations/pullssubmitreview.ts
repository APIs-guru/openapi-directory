import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsSubmitReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=review_id" })
  reviewId: number;
}

export enum PullsSubmitReviewRequestBodyEventEnum {
    Approve = "APPROVE"
,    RequestChanges = "REQUEST_CHANGES"
,    Comment = "COMMENT"
}


export class PullsSubmitReviewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=event" })
  event: PullsSubmitReviewRequestBodyEventEnum;
}


export class PullsSubmitReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsSubmitReviewPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsSubmitReviewRequestBody;
}


export class PullsSubmitReviewResponse extends SpeakeasyBase {
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
