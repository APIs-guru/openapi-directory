import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddProjectForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddProjectForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddProjectForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskAddProjectRequest;
}


export class AddProjectForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddProjectForTaskPathParams;

  @Metadata()
  queryParams: AddProjectForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddProjectForTaskRequestBody;
}


export class AddProjectForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddProjectForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addProjectForTask200ApplicationJsonObject?: AddProjectForTask200ApplicationJson;
}
