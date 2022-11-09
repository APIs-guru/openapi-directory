import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListPullRequestsAssociatedWithCommitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" })
  commitSha: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListPullRequestsAssociatedWithCommitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListPullRequestsAssociatedWithCommitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListPullRequestsAssociatedWithCommitPathParams;

  @Metadata()
  queryParams: ReposListPullRequestsAssociatedWithCommitQueryParams;
}


export class ReposListPullRequestsAssociatedWithCommit415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposListPullRequestsAssociatedWithCommitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PullRequestSimple })
  pullRequestSimples?: shared.PullRequestSimple[];

  @Metadata()
  reposListPullRequestsAssociatedWithCommit415ApplicationJsonObject?: ReposListPullRequestsAssociatedWithCommit415ApplicationJson;
}
