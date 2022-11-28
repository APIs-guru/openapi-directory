import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsRemoveMembershipForUserInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsRemoveMembershipForUserInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsRemoveMembershipForUserInOrgPathParams;
}


export class TeamsRemoveMembershipForUserInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
