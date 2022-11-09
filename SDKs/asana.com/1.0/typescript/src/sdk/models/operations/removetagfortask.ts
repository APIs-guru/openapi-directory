import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveTagForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveTagForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveTagForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskRemoveTagRequest;
}


export class RemoveTagForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveTagForTaskPathParams;

  @Metadata()
  queryParams: RemoveTagForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveTagForTaskRequestBody;
}


export class RemoveTagForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveTagForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeTagForTask200ApplicationJsonObject?: RemoveTagForTask200ApplicationJson;
}
