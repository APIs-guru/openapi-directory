import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCheckPermissionsForProjectLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCheckPermissionsForProjectLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCheckPermissionsForProjectLegacyPathParams;
}


export class TeamsCheckPermissionsForProjectLegacy415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class TeamsCheckPermissionsForProjectLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamProject?: shared.TeamProject;

  @Metadata()
  teamsCheckPermissionsForProjectLegacy415ApplicationJsonObject?: TeamsCheckPermissionsForProjectLegacy415ApplicationJson;
}
