import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveMemberLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMemberLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveMemberLegacyPathParams;
}


export class TeamsRemoveMemberLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
