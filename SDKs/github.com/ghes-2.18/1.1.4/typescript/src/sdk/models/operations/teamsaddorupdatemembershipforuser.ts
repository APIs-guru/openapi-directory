import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsAddOrUpdateMembershipForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}


export class TeamsAddOrUpdateMembershipForUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;
}


export class TeamsAddOrUpdateMembershipForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateMembershipForUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateMembershipForUserRequestBody;
}


export class TeamsAddOrUpdateMembershipForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamMembership?: shared.TeamMembership;
}
