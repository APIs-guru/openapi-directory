import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddDependentsForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddDependentsForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddDependentsForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ModifyDependentsRequest;
}


export class AddDependentsForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact })
  data?: shared.TaskCompact[];
}


export class AddDependentsForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddDependentsForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: AddDependentsForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddDependentsForTaskRequestBody;
}


export class AddDependentsForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addDependentsForTask200ApplicationJsonObject?: AddDependentsForTask200ApplicationJson;
}
