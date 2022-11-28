import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsSubmitReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=review_id" })
  reviewId: number;
}

export enum PullsSubmitReviewRequestBodyEventEnum {
    Approve = "APPROVE",
    RequestChanges = "REQUEST_CHANGES",
    Comment = "COMMENT"
}


export class PullsSubmitReviewRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: PullsSubmitReviewRequestBodyEventEnum;
}


export class PullsSubmitReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsSubmitReviewPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsSubmitReviewRequestBody;
}


export class PullsSubmitReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequestReview?: shared.PullRequestReview;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
