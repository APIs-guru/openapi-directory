import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveTagForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveTagForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveTagForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskRemoveTagRequest;
}


export class RemoveTagForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveTagForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveTagForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveTagForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveTagForTaskRequestBody;
}


export class RemoveTagForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeTagForTask200ApplicationJsonObject?: RemoveTagForTask200ApplicationJson;
}
