import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsGetMembershipForUserLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsGetMembershipForUserLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsGetMembershipForUserLegacyPathParams;
}


export class TeamsGetMembershipForUserLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  teamMembership?: shared.TeamMembership;
}
