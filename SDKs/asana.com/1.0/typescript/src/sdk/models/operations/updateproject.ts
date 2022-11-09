import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class UpdateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectRequest;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProjectPathParams;

  @Metadata()
  queryParams: UpdateProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBody;
}


export class UpdateProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateProject200ApplicationJsonObject?: UpdateProject200ApplicationJson;
}
