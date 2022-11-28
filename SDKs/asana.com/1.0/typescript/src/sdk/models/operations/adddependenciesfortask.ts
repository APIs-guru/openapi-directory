import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddDependenciesForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddDependenciesForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddDependenciesForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ModifyDependenciesRequest;
}


export class AddDependenciesForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddDependenciesForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddDependenciesForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: AddDependenciesForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddDependenciesForTaskRequestBody;
}


export class AddDependenciesForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addDependenciesForTask200ApplicationJsonObject?: AddDependenciesForTask200ApplicationJson;
}
