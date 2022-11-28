import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class UpdateWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateWorkspaceRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.WorkspaceRequestInput;
}


export class UpdateWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.WorkspaceResponse;
}


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateWorkspaceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateWorkspaceRequestBodyInput;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateWorkspace200ApplicationJsonObject?: UpdateWorkspace200ApplicationJson;
}
