import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsGetReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=review_id" })
  reviewId: number;
}


export class PullsGetReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsGetReviewPathParams;
}


export class PullsGetReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequestReview?: shared.PullRequestReview;
}
