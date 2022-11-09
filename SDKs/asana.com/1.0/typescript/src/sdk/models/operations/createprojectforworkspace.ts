import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class CreateProjectForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectForWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectRequest;
}


export class CreateProjectForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProjectForWorkspacePathParams;

  @Metadata()
  queryParams: CreateProjectForWorkspaceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectForWorkspaceRequestBody;
}


export class CreateProjectForWorkspace201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class CreateProjectForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createProjectForWorkspace201ApplicationJsonObject?: CreateProjectForWorkspace201ApplicationJson;
}
