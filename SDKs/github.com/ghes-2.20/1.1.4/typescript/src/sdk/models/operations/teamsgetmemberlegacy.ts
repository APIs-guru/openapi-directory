import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsGetMemberLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsGetMemberLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsGetMemberLegacyPathParams;
}


export class TeamsGetMemberLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
