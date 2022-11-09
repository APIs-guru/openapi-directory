import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddOrUpdateMembershipForUserInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum {
    Member = "member"
,    Maintainer = "maintainer"
}


export class TeamsAddOrUpdateMembershipForUserInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role?: TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;
}


export class TeamsAddOrUpdateMembershipForUserInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateMembershipForUserInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
}


export class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors })
  errors?: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateMembershipForUserInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMembership?: shared.TeamMembership;

  @Metadata()
  teamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonObject?: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson;
}
