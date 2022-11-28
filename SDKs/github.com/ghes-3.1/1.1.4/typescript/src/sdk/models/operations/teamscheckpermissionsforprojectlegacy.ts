import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCheckPermissionsForProjectLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCheckPermissionsForProjectLegacy415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class TeamsCheckPermissionsForProjectLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCheckPermissionsForProjectLegacyPathParams;
}


export class TeamsCheckPermissionsForProjectLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamProject?: shared.TeamProject;

  @SpeakeasyMetadata()
  teamsCheckPermissionsForProjectLegacy415ApplicationJsonObject?: TeamsCheckPermissionsForProjectLegacy415ApplicationJson;
}
