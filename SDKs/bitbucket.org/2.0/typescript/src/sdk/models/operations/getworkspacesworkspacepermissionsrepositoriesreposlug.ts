import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurityOption3;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams;

  @Metadata()
  queryParams: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams;

  @Metadata()
  security: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
