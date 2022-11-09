import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveProjectInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsRemoveProjectInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveProjectInOrgPathParams;
}


export class TeamsRemoveProjectInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
