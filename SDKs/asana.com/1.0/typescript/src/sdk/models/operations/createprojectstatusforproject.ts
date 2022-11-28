import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectStatusForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class CreateProjectStatusForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectStatusForProjectRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectStatusRequestInput;
}


export class CreateProjectStatusForProject201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectStatusResponse;
}


export class CreateProjectStatusForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProjectStatusForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateProjectStatusForProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProjectStatusForProjectRequestBodyInput;
}


export class CreateProjectStatusForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createProjectStatusForProject201ApplicationJsonObject?: CreateProjectStatusForProject201ApplicationJson;
}
