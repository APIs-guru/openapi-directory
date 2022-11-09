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


export class TeamsAddOrUpdateMembershipForUserInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMembership?: shared.TeamMembership;
}
