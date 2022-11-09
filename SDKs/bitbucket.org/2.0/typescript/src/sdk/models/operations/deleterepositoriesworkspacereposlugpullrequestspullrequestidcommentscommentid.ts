import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_request_id" })
  pullRequestId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurityOption3;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams;

  @Metadata()
  security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
}


export class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
