import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveUserForTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_gid" })
  teamGid: string;
}


export class RemoveUserForTeamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveUserForTeamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TeamRemoveUserRequest;
}


export class RemoveUserForTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveUserForTeamPathParams;

  @Metadata()
  queryParams: RemoveUserForTeamQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveUserForTeamRequestBody;
}


export class RemoveUserForTeam204ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveUserForTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeUserForTeam204ApplicationJsonObject?: RemoveUserForTeam204ApplicationJson;
}
