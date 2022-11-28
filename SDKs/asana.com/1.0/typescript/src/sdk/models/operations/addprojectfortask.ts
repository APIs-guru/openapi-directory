import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddProjectForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddProjectForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddProjectForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskAddProjectRequest;
}


export class AddProjectForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddProjectForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddProjectForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: AddProjectForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddProjectForTaskRequestBody;
}


export class AddProjectForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addProjectForTask200ApplicationJsonObject?: AddProjectForTask200ApplicationJson;
}
