import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectRequest;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateProjectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectRequestBody;
}


export class CreateProject201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectResponse;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createProject201ApplicationJsonObject?: CreateProject201ApplicationJson;
}
