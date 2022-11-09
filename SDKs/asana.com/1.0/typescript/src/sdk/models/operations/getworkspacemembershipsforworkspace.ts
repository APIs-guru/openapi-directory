import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceMembershipsForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class GetWorkspaceMembershipsForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetWorkspaceMembershipsForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceMembershipsForWorkspacePathParams;

  @Metadata()
  queryParams: GetWorkspaceMembershipsForWorkspaceQueryParams;
}


export class GetWorkspaceMembershipsForWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.WorkspaceMembershipCompact })
  data?: shared.WorkspaceMembershipCompact[];
}


export class GetWorkspaceMembershipsForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWorkspaceMembershipsForWorkspace200ApplicationJsonObject?: GetWorkspaceMembershipsForWorkspace200ApplicationJson;
}
