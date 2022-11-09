import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCheckPermissionsForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCheckPermissionsForProjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsCheckPermissionsForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCheckPermissionsForProjectPathParams;

  @Metadata()
  headers: TeamsCheckPermissionsForProjectHeaders;
}


export class TeamsCheckPermissionsForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamProject?: shared.TeamProject;
}
