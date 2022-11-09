import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPermissionsTeamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetUserPermissionsTeamsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUserPermissionsTeamsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUserPermissionsTeamsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserPermissionsTeamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserPermissionsTeamsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserPermissionsTeamsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUserPermissionsTeamsSecurityOption3;
}


export class GetUserPermissionsTeamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserPermissionsTeamsQueryParams;

  @Metadata()
  security: GetUserPermissionsTeamsSecurity;
}


export class GetUserPermissionsTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedTeamPermissions?: shared.PaginatedTeamPermissions;
}
