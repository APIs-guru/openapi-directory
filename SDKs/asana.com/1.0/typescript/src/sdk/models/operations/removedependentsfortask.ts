import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveDependentsForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveDependentsForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveDependentsForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ModifyDependentsRequest;
}


export class RemoveDependentsForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>[];
}


export class RemoveDependentsForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveDependentsForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveDependentsForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveDependentsForTaskRequestBody;
}


export class RemoveDependentsForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeDependentsForTask200ApplicationJsonObject?: RemoveDependentsForTask200ApplicationJson;
}
