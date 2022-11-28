import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddUserForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class AddUserForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddUserForTeamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TeamAddUserRequest;
}


export class AddUserForTeam200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.UserResponse;
}


export class AddUserForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddUserForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: AddUserForTeamQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddUserForTeamRequestBody;
}


export class AddUserForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addUserForTeam200ApplicationJsonObject?: AddUserForTeam200ApplicationJson;
}
