import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListPullRequestsAssociatedWithCommitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" })
  commitSha: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListPullRequestsAssociatedWithCommitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListPullRequestsAssociatedWithCommit415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReposListPullRequestsAssociatedWithCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListPullRequestsAssociatedWithCommitPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListPullRequestsAssociatedWithCommitQueryParams;
}


export class ReposListPullRequestsAssociatedWithCommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PullRequestSimple })
  pullRequestSimples?: shared.PullRequestSimple[];

  @SpeakeasyMetadata()
  reposListPullRequestsAssociatedWithCommit415ApplicationJsonObject?: ReposListPullRequestsAssociatedWithCommit415ApplicationJson;
}
