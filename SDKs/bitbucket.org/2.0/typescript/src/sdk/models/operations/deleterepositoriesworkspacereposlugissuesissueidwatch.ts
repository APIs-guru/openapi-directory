import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_id" })
  issueId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurityOption3;
}


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchPathParams;

  @Metadata()
  security: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
}


export class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
