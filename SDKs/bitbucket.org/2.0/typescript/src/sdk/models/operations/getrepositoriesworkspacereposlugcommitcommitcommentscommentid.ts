import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  commitComment?: Map<string, any>;
}
