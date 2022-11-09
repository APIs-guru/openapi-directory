import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddOrUpdateMembershipForUserLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum {
    Member = "member"
,    Maintainer = "maintainer"
}


export class TeamsAddOrUpdateMembershipForUserLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role?: TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
}


export class TeamsAddOrUpdateMembershipForUserLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateMembershipForUserLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
}


export class TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors", elemType: operations.TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors })
  errors?: TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateMembershipForUserLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamMembership?: shared.TeamMembership;

  @Metadata()
  teamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonObject?: TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson;
}
