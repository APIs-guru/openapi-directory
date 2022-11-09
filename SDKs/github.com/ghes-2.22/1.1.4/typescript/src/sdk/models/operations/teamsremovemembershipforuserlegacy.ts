import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveMembershipForUserLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMembershipForUserLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveMembershipForUserLegacyPathParams;
}


export class TeamsRemoveMembershipForUserLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
