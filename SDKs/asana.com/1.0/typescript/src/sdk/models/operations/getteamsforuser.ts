import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}


export class GetTeamsForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization: string;
}


export class GetTeamsForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsForUserPathParams;

  @Metadata()
  queryParams: GetTeamsForUserQueryParams;
}


export class GetTeamsForUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TeamCompact })
  data?: shared.TeamCompact[];
}


export class GetTeamsForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamsForUser200ApplicationJsonObject?: GetTeamsForUser200ApplicationJson;
}
