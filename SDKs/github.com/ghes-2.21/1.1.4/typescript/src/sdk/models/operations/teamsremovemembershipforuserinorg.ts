import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveMembershipForUserInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMembershipForUserInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveMembershipForUserInOrgPathParams;
}


export class TeamsRemoveMembershipForUserInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
