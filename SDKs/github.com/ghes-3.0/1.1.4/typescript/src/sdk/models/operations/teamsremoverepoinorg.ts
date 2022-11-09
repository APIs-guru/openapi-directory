import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveRepoInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsRemoveRepoInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveRepoInOrgPathParams;
}


export class TeamsRemoveRepoInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
