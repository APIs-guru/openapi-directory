import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMembershipsForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class GetTeamMembershipsForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTeamMembershipsForTeam200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TeamMembershipCompact })
  data?: shared.TeamMembershipCompact[];
}


export class GetTeamMembershipsForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMembershipsForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTeamMembershipsForTeamQueryParams;
}


export class GetTeamMembershipsForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamMembershipsForTeam200ApplicationJsonObject?: GetTeamMembershipsForTeam200ApplicationJson;
}
