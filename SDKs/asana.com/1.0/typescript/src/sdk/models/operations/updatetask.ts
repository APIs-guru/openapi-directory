import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class UpdateTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskRequest;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTaskPathParams;

  @Metadata()
  queryParams: UpdateTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTaskRequestBody;
}


export class UpdateTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskResponse;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateTask200ApplicationJsonObject?: UpdateTask200ApplicationJson;
}
