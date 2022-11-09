import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsRemoveProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveProjectPathParams;
}


export class TeamsRemoveProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
