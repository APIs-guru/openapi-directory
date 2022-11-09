import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_membership_gid" })
  workspaceMembershipGid: string;
}


export class GetWorkspaceMembershipQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetWorkspaceMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceMembershipPathParams;

  @Metadata()
  queryParams: GetWorkspaceMembershipQueryParams;
}


export class GetWorkspaceMembership200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WorkspaceMembershipResponse;
}


export class GetWorkspaceMembershipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWorkspaceMembership200ApplicationJsonObject?: GetWorkspaceMembership200ApplicationJson;
}
