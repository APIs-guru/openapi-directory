import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsGetMembershipForUserLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsGetMembershipForUserLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsGetMembershipForUserLegacyPathParams;
}


export class TeamsGetMembershipForUserLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamMembership?: shared.TeamMembership;
}
