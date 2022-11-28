import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsAddOrUpdateMembershipForUserInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}


export class TeamsAddOrUpdateMembershipForUserInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;
}


export class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors })
  errors?: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateMembershipForUserInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateMembershipForUserInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
}


export class TeamsAddOrUpdateMembershipForUserInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamMembership?: shared.TeamMembership;

  @SpeakeasyMetadata()
  teamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonObject?: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson;
}
