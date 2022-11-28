import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class CreateProjectForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectForWorkspaceRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectRequestInput;
}


export class CreateProjectForWorkspace201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class CreateProjectForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProjectForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateProjectForWorkspaceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProjectForWorkspaceRequestBodyInput;
}


export class CreateProjectForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createProjectForWorkspace201ApplicationJsonObject?: CreateProjectForWorkspace201ApplicationJson;
}
