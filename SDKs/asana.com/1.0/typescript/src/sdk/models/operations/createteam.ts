import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateTeamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TeamRequest;
}


export class CreateTeamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateTeamQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTeamRequestBody;
}


export class CreateTeam201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TeamResponse;
}


export class CreateTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createTeam201ApplicationJsonObject?: CreateTeam201ApplicationJson;
}
