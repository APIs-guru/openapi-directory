import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMembershipsForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class GetTeamMembershipsForTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTeamMembershipsForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMembershipsForTeamPathParams;

  @Metadata()
  queryParams: GetTeamMembershipsForTeamQueryParams;
}


export class GetTeamMembershipsForTeam200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TeamMembershipCompact })
  data?: shared.TeamMembershipCompact[];
}


export class GetTeamMembershipsForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamMembershipsForTeam200ApplicationJsonObject?: GetTeamMembershipsForTeam200ApplicationJson;
}
