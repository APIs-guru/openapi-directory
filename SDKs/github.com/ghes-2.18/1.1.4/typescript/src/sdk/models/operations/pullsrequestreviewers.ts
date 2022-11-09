import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsRequestReviewersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsRequestReviewersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reviewers" })
  reviewers?: string[];

  @Metadata({ data: "json, name=team_reviewers" })
  teamReviewers?: string[];
}


export class PullsRequestReviewersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsRequestReviewersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsRequestReviewersRequestBody;
}


export class PullsRequestReviewersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequestSimple?: shared.PullRequestSimple;
}
