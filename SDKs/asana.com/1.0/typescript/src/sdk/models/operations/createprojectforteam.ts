import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class CreateProjectForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectForTeamRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectRequestInput;
}


export class CreateProjectForTeam201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class CreateProjectForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProjectForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateProjectForTeamQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProjectForTeamRequestBodyInput;
}


export class CreateProjectForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createProjectForTeam201ApplicationJsonObject?: CreateProjectForTeam201ApplicationJson;
}
