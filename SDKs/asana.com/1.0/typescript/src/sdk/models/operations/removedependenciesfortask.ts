import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveDependenciesForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveDependenciesForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveDependenciesForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ModifyDependenciesRequest;
}


export class RemoveDependenciesForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveDependenciesForTaskPathParams;

  @Metadata()
  queryParams: RemoveDependenciesForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveDependenciesForTaskRequestBody;
}


export class RemoveDependenciesForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>[];
}


export class RemoveDependenciesForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeDependenciesForTask200ApplicationJsonObject?: RemoveDependenciesForTask200ApplicationJson;
}
