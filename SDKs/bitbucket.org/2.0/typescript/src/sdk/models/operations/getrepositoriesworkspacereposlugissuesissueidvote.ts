import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_id" })
  issueId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
