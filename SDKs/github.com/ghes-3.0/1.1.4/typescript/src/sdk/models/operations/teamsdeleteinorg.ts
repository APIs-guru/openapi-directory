import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeleteInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsDeleteInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteInOrgPathParams;
}


export class TeamsDeleteInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
