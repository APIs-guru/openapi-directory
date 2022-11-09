import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPermissionsWorkspacesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetUserPermissionsWorkspacesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUserPermissionsWorkspacesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUserPermissionsWorkspacesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserPermissionsWorkspacesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserPermissionsWorkspacesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserPermissionsWorkspacesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUserPermissionsWorkspacesSecurityOption3;
}


export class GetUserPermissionsWorkspacesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserPermissionsWorkspacesQueryParams;

  @Metadata()
  security: GetUserPermissionsWorkspacesSecurity;
}


export class GetUserPermissionsWorkspacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
