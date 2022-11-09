import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernamePermissionsRepositoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernamePermissionsRepositoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetTeamsUsernamePermissionsRepositoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernamePermissionsRepositoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernamePermissionsRepositoriesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernamePermissionsRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernamePermissionsRepositoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernamePermissionsRepositoriesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernamePermissionsRepositoriesSecurityOption3;
}


export class GetTeamsUsernamePermissionsRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernamePermissionsRepositoriesPathParams;

  @Metadata()
  queryParams: GetTeamsUsernamePermissionsRepositoriesQueryParams;

  @Metadata()
  security: GetTeamsUsernamePermissionsRepositoriesSecurity;
}


export class GetTeamsUsernamePermissionsRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
