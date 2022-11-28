import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspaceMembershipsForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class GetWorkspaceMembershipsForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetWorkspaceMembershipsForWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.WorkspaceMembershipCompact })
  data?: shared.WorkspaceMembershipCompact[];
}


export class GetWorkspaceMembershipsForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspaceMembershipsForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspaceMembershipsForWorkspaceQueryParams;
}


export class GetWorkspaceMembershipsForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWorkspaceMembershipsForWorkspace200ApplicationJsonObject?: GetWorkspaceMembershipsForWorkspace200ApplicationJson;
}
