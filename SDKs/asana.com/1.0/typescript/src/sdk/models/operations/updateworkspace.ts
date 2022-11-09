import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class UpdateWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WorkspaceRequest;
}


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWorkspacePathParams;

  @Metadata()
  queryParams: UpdateWorkspaceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateWorkspaceRequestBody;
}


export class UpdateWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WorkspaceResponse;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateWorkspace200ApplicationJsonObject?: UpdateWorkspace200ApplicationJson;
}
