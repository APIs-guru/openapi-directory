import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsRemoveProjectLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsRemoveProjectLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveProjectLegacyPathParams;
}


export class TeamsRemoveProjectLegacy415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class TeamsRemoveProjectLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamsRemoveProjectLegacy415ApplicationJsonObject?: TeamsRemoveProjectLegacy415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
