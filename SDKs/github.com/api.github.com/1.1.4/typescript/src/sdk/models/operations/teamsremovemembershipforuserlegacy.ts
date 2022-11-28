import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsRemoveMembershipForUserLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMembershipForUserLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsRemoveMembershipForUserLegacyPathParams;
}


export class TeamsRemoveMembershipForUserLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
