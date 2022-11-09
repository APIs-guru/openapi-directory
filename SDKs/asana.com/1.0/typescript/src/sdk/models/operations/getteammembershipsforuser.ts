import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMembershipsForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}


export class GetTeamMembershipsForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetTeamMembershipsForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMembershipsForUserPathParams;

  @Metadata()
  queryParams: GetTeamMembershipsForUserQueryParams;
}


export class GetTeamMembershipsForUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TeamMembershipCompact })
  data?: shared.TeamMembershipCompact[];
}


export class GetTeamMembershipsForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamMembershipsForUser200ApplicationJsonObject?: GetTeamMembershipsForUser200ApplicationJson;
}
