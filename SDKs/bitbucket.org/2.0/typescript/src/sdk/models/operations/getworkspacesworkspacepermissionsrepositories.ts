import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspacePermissionsRepositoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspacePermissionsRepositoriesSecurityOption3;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspacePermissionsRepositoriesPathParams;

  @Metadata()
  queryParams: GetWorkspacesWorkspacePermissionsRepositoriesQueryParams;

  @Metadata()
  security: GetWorkspacesWorkspacePermissionsRepositoriesSecurity;
}


export class GetWorkspacesWorkspacePermissionsRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
