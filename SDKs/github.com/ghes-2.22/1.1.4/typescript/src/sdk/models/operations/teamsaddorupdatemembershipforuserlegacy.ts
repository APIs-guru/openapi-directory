import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsAddOrUpdateMembershipForUserLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}


export class TeamsAddOrUpdateMembershipForUserLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
}


export class TeamsAddOrUpdateMembershipForUserLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateMembershipForUserLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
}


export class TeamsAddOrUpdateMembershipForUserLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  teamMembership?: shared.TeamMembership;
}
