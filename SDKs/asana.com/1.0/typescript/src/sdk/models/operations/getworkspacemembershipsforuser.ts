import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceMembershipsForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}


export class GetWorkspaceMembershipsForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetWorkspaceMembershipsForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceMembershipsForUserPathParams;

  @Metadata()
  queryParams: GetWorkspaceMembershipsForUserQueryParams;
}


export class GetWorkspaceMembershipsForUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.WorkspaceMembershipCompact })
  data?: shared.WorkspaceMembershipCompact[];
}


export class GetWorkspaceMembershipsForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWorkspaceMembershipsForUser200ApplicationJsonObject?: GetWorkspaceMembershipsForUser200ApplicationJson;
}
