import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DuplicateTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class DuplicateTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DuplicateTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskDuplicateRequest;
}


export class DuplicateTask201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.JobResponse;
}


export class DuplicateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DuplicateTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: DuplicateTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DuplicateTaskRequestBody;
}


export class DuplicateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  duplicateTask201ApplicationJsonObject?: DuplicateTask201ApplicationJson;
}
