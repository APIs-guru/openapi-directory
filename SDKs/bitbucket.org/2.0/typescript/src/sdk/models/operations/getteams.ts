import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTeamsRoleEnum {
    Admin = "admin"
,    Contributor = "contributor"
,    Member = "member"
}


export class GetTeamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetTeamsRoleEnum;
}


export class GetTeamsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsSecurityOption3;
}


export class GetTeamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTeamsQueryParams;

  @Metadata()
  security: GetTeamsSecurity;
}


export class GetTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedTeams?: shared.PaginatedTeams;
}
