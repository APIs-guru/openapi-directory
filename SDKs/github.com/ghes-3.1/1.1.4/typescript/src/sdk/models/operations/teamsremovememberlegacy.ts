import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsRemoveMemberLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMemberLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsRemoveMemberLegacyPathParams;
}


export class TeamsRemoveMemberLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
