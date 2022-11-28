import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTeamsRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member"
}


export class GetTeamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetTeamsRoleEnum;
}


export class GetTeamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTeamsQueryParams;

  @SpeakeasyMetadata()
  security: GetTeamsSecurity;
}


export class GetTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedTeams?: shared.PaginatedTeams;
}
