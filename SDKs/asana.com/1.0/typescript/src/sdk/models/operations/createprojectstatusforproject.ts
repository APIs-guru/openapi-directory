import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectStatusForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class CreateProjectStatusForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectStatusForProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectStatusRequest;
}


export class CreateProjectStatusForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProjectStatusForProjectPathParams;

  @Metadata()
  queryParams: CreateProjectStatusForProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectStatusForProjectRequestBody;
}


export class CreateProjectStatusForProject201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectStatusResponse;
}


export class CreateProjectStatusForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createProjectStatusForProject201ApplicationJsonObject?: CreateProjectStatusForProject201ApplicationJson;
}
