import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class GetProjectsForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectsForWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectCompact })
  data?: shared.ProjectCompact[];
}


export class GetProjectsForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectsForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectsForWorkspaceQueryParams;
}


export class GetProjectsForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectsForWorkspace200ApplicationJsonObject?: GetProjectsForWorkspace200ApplicationJson;
}
