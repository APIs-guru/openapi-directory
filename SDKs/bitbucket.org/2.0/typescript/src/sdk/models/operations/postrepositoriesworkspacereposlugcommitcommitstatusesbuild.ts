import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurityOption3;
}


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  commitstatus?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
