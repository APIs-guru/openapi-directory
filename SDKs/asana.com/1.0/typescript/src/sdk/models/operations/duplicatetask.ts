import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DuplicateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class DuplicateTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DuplicateTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskDuplicateRequest;
}


export class DuplicateTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DuplicateTaskPathParams;

  @Metadata()
  queryParams: DuplicateTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: DuplicateTaskRequestBody;
}


export class DuplicateTask201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.JobResponse;
}


export class DuplicateTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  duplicateTask201ApplicationJsonObject?: DuplicateTask201ApplicationJson;
}
