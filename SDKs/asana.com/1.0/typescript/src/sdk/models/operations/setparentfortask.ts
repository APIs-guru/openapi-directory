import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetParentForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class SetParentForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class SetParentForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskSetParentRequest;
}


export class SetParentForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetParentForTaskPathParams;

  @Metadata()
  queryParams: SetParentForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetParentForTaskRequestBody;
}


export class SetParentForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskResponse;
}


export class SetParentForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  setParentForTask200ApplicationJsonObject?: SetParentForTask200ApplicationJson;
}
