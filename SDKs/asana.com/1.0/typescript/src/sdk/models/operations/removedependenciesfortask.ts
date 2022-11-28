import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveDependenciesForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveDependenciesForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveDependenciesForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ModifyDependenciesRequest;
}


export class RemoveDependenciesForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>[];
}


export class RemoveDependenciesForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveDependenciesForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveDependenciesForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveDependenciesForTaskRequestBody;
}


export class RemoveDependenciesForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeDependenciesForTask200ApplicationJsonObject?: RemoveDependenciesForTask200ApplicationJson;
}
