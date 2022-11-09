import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveProjectForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveProjectForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveProjectForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskRemoveProjectRequest;
}


export class RemoveProjectForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveProjectForTaskPathParams;

  @Metadata()
  queryParams: RemoveProjectForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveProjectForTaskRequestBody;
}


export class RemoveProjectForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveProjectForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeProjectForTask200ApplicationJsonObject?: RemoveProjectForTask200ApplicationJson;
}
