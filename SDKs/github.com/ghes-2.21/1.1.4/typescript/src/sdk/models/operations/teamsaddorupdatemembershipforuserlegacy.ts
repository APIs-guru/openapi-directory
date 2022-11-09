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


export class TeamsAddOrUpdateMembershipForUserLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamMembership?: shared.TeamMembership;
}
