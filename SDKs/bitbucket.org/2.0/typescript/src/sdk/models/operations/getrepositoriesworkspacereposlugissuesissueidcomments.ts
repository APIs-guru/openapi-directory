import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_id" })
  issueId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsQueryParams;

  @SpeakeasyMetadata()
  security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paginatedIssueComments?: shared.PaginatedIssueComments;
}
