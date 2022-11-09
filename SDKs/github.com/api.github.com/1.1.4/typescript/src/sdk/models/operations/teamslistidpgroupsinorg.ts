import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListIdpGroupsInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsListIdpGroupsInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListIdpGroupsInOrgPathParams;
}


export class TeamsListIdpGroupsInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  groupMapping?: shared.GroupMapping;
}
