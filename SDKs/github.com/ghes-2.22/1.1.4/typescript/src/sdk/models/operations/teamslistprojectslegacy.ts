import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListProjectsLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsListProjectsLegacyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListProjectsLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListProjectsLegacyPathParams;

  @Metadata()
  queryParams: TeamsListProjectsLegacyQueryParams;
}


export class TeamsListProjectsLegacy415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class TeamsListProjectsLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.TeamProject })
  teamProjects?: shared.TeamProject[];

  @Metadata()
  teamsListProjectsLegacy415ApplicationJsonObject?: TeamsListProjectsLegacy415ApplicationJson;
}
