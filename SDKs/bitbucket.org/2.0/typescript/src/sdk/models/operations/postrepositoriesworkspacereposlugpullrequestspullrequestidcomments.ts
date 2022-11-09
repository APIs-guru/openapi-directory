import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_request_id" })
  pullRequestId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurityOption3;
}


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pullrequestComment?: Map<string, any>;
}
