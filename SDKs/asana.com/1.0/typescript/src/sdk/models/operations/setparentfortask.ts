import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetParentForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class SetParentForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class SetParentForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskSetParentRequest;
}


export class SetParentForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskResponse;
}


export class SetParentForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetParentForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: SetParentForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetParentForTaskRequestBody;
}


export class SetParentForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setParentForTask200ApplicationJsonObject?: SetParentForTask200ApplicationJson;
}
