import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsGetMembershipForUserInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsGetMembershipForUserInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsGetMembershipForUserInOrgPathParams;
}


export class TeamsGetMembershipForUserInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMembership?: shared.TeamMembership;
}
