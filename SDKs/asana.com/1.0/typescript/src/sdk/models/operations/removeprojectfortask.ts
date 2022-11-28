import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveProjectForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveProjectForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveProjectForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskRemoveProjectRequest;
}


export class RemoveProjectForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveProjectForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveProjectForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveProjectForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveProjectForTaskRequestBody;
}


export class RemoveProjectForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeProjectForTask200ApplicationJsonObject?: RemoveProjectForTask200ApplicationJson;
}
