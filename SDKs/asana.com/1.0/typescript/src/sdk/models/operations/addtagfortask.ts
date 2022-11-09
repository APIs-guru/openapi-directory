import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddTagForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddTagForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddTagForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskAddTagRequest;
}


export class AddTagForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTagForTaskPathParams;

  @Metadata()
  queryParams: AddTagForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddTagForTaskRequestBody;
}


export class AddTagForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddTagForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addTagForTask200ApplicationJsonObject?: AddTagForTask200ApplicationJson;
}
