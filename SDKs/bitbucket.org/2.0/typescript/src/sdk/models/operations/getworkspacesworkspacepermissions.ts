import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspacePermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetWorkspacesWorkspacePermissionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspacePermissionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspacePermissionsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspacePermissionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspacePermissionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspacePermissionsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspacePermissionsSecurityOption3;
}


export class GetWorkspacesWorkspacePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspacePermissionsPathParams;

  @Metadata()
  queryParams: GetWorkspacesWorkspacePermissionsQueryParams;

  @Metadata()
  security: GetWorkspacesWorkspacePermissionsSecurity;
}


export class GetWorkspacesWorkspacePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
