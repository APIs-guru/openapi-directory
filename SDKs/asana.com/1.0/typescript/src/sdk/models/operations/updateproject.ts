import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class UpdateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateProjectRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectRequestInput;
}


export class UpdateProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBodyInput;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateProject200ApplicationJsonObject?: UpdateProject200ApplicationJson;
}
