import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveMembershipForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMembershipForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveMembershipForUserPathParams;
}


export class TeamsRemoveMembershipForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
