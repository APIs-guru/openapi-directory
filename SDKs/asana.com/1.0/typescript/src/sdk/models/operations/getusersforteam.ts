import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class GetUsersForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetUsersForTeam200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.UserCompact })
  data?: shared.UserCompact[];
}


export class GetUsersForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersForTeamQueryParams;
}


export class GetUsersForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUsersForTeam200ApplicationJsonObject?: GetUsersForTeam200ApplicationJson;
}
