import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddDependenciesForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddDependenciesForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddDependenciesForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ModifyDependenciesRequest;
}


export class AddDependenciesForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddDependenciesForTaskPathParams;

  @Metadata()
  queryParams: AddDependenciesForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddDependenciesForTaskRequestBody;
}


export class AddDependenciesForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddDependenciesForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addDependenciesForTask200ApplicationJsonObject?: AddDependenciesForTask200ApplicationJson;
}
