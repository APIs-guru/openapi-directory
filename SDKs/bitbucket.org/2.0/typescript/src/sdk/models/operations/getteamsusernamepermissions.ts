import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernamePermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernamePermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetTeamsUsernamePermissionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernamePermissionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernamePermissionsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernamePermissionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernamePermissionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernamePermissionsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernamePermissionsSecurityOption3;
}


export class GetTeamsUsernamePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernamePermissionsPathParams;

  @Metadata()
  queryParams: GetTeamsUsernamePermissionsQueryParams;

  @Metadata()
  security: GetTeamsUsernamePermissionsSecurity;
}


export class GetTeamsUsernamePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedTeamPermissions?: shared.PaginatedTeamPermissions;
}
