import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_request_id" })
  pullRequestId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurityOption3;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesPathParams;

  @Metadata()
  security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
