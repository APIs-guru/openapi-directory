import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCheckPermissionsForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCheckPermissionsForProjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsCheckPermissionsForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCheckPermissionsForProjectPathParams;

  @SpeakeasyMetadata()
  headers: TeamsCheckPermissionsForProjectHeaders;
}


export class TeamsCheckPermissionsForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamProject?: shared.TeamProject;
}
