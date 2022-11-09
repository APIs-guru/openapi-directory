import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddUserForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class AddUserForTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddUserForTeamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TeamAddUserRequest;
}


export class AddUserForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddUserForTeamPathParams;

  @Metadata()
  queryParams: AddUserForTeamQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddUserForTeamRequestBody;
}


export class AddUserForTeam200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.UserResponse;
}


export class AddUserForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addUserForTeam200ApplicationJsonObject?: AddUserForTeam200ApplicationJson;
}
