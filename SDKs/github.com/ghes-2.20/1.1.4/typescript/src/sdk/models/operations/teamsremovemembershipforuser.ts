import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsRemoveMembershipForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMembershipForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsRemoveMembershipForUserPathParams;
}


export class TeamsRemoveMembershipForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
