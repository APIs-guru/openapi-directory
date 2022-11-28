import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveUserForTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class RemoveUserForTeamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveUserForTeamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TeamRemoveUserRequest;
}


export class RemoveUserForTeam204ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveUserForTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveUserForTeamPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveUserForTeamQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveUserForTeamRequestBody;
}


export class RemoveUserForTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeUserForTeam204ApplicationJsonObject?: RemoveUserForTeam204ApplicationJson;
}
