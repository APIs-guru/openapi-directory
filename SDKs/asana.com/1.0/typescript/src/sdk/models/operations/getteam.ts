import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class GetTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamPathParams;

  @Metadata()
  queryParams: GetTeamQueryParams;
}


export class GetTeam200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TeamResponse;
}


export class GetTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeam200ApplicationJsonObject?: GetTeam200ApplicationJson;
}
