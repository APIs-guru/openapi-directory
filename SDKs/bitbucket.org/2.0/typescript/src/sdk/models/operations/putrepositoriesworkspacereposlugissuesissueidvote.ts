import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_id" })
  issueId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams;

  @SpeakeasyMetadata()
  security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
