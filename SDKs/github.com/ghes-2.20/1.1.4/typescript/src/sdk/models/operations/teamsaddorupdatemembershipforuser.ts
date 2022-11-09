import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddOrUpdateMembershipForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum {
    Member = "member"
,    Maintainer = "maintainer"
}


export class TeamsAddOrUpdateMembershipForUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=role" })
  role?: TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;
}


export class TeamsAddOrUpdateMembershipForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateMembershipForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateMembershipForUserRequestBody;
}


export class TeamsAddOrUpdateMembershipForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMembership?: shared.TeamMembership;
}
