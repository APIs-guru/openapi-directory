import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_id" })
  issueId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurityOption3;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams;

  @Metadata()
  security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
