import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsRequestReviewersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsRequestReviewersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reviewers" })
  reviewers?: string[];

  @SpeakeasyMetadata({ data: "json, name=team_reviewers" })
  teamReviewers?: string[];
}


export class PullsRequestReviewersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsRequestReviewersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsRequestReviewersRequestBody;
}


export class PullsRequestReviewersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequestSimple?: shared.PullRequestSimple;
}
