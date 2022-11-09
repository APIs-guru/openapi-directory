import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSubtaskForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class CreateSubtaskForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateSubtaskForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskRequest;
}


export class CreateSubtaskForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSubtaskForTaskPathParams;

  @Metadata()
  queryParams: CreateSubtaskForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSubtaskForTaskRequestBody;
}


export class CreateSubtaskForTask201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskResponse;
}


export class CreateSubtaskForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createSubtaskForTask201ApplicationJsonObject?: CreateSubtaskForTask201ApplicationJson;
}
