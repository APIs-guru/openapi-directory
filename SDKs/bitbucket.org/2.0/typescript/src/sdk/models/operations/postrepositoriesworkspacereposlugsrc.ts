import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRepositoriesWorkspaceRepoSlugSrcPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugSrcQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=files" })
  files?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parents" })
  parents?: string;
}


export class PostRepositoriesWorkspaceRepoSlugSrcSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostRepositoriesWorkspaceRepoSlugSrcSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostRepositoriesWorkspaceRepoSlugSrcSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRepositoriesWorkspaceRepoSlugSrcSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRepositoriesWorkspaceRepoSlugSrcSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostRepositoriesWorkspaceRepoSlugSrcSecurityOption3;
}


export class PostRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugSrcPathParams;

  @Metadata()
  queryParams: PostRepositoriesWorkspaceRepoSlugSrcQueryParams;

  @Metadata()
  security: PostRepositoriesWorkspaceRepoSlugSrcSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
