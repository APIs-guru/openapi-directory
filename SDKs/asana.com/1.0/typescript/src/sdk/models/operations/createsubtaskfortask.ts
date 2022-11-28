import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSubtaskForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class CreateSubtaskForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateSubtaskForTaskRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskRequestInput;
}


export class CreateSubtaskForTask201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskResponse;
}


export class CreateSubtaskForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSubtaskForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateSubtaskForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSubtaskForTaskRequestBodyInput;
}


export class CreateSubtaskForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSubtaskForTask201ApplicationJsonObject?: CreateSubtaskForTask201ApplicationJson;
}
