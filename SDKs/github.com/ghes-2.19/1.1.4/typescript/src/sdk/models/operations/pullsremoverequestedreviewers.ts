import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsRemoveRequestedReviewersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsRemoveRequestedReviewersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reviewers" })
  reviewers: string[];

  @SpeakeasyMetadata({ data: "json, name=team_reviewers" })
  teamReviewers?: string[];
}


export class PullsRemoveRequestedReviewersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsRemoveRequestedReviewersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsRemoveRequestedReviewersRequestBody;
}


export class PullsRemoveRequestedReviewersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pullRequestSimple?: shared.PullRequestSimple;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
