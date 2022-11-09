import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class CreateProjectForTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectForTeamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectRequest;
}


export class CreateProjectForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProjectForTeamPathParams;

  @Metadata()
  queryParams: CreateProjectForTeamQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectForTeamRequestBody;
}


export class CreateProjectForTeam201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class CreateProjectForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createProjectForTeam201ApplicationJsonObject?: CreateProjectForTeam201ApplicationJson;
}
