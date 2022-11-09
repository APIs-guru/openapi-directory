import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsRemoveRequestedReviewersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsRemoveRequestedReviewersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reviewers" })
  reviewers: string[];

  @Metadata({ data: "json, name=team_reviewers" })
  teamReviewers?: string[];
}


export class PullsRemoveRequestedReviewersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsRemoveRequestedReviewersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsRemoveRequestedReviewersRequestBody;
}


export class PullsRemoveRequestedReviewersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: shared.ValidationError;
}
