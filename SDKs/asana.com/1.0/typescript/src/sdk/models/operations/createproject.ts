import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectRequestInput;
}


export class CreateProject201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProjectRequestBodyInput;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createProject201ApplicationJsonObject?: CreateProject201ApplicationJson;
}
