import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams;

  @SpeakeasyMetadata()
  security: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
