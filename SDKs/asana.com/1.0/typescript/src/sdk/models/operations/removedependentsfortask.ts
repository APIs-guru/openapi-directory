import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveDependentsForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveDependentsForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveDependentsForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ModifyDependentsRequest;
}


export class RemoveDependentsForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveDependentsForTaskPathParams;

  @Metadata()
  queryParams: RemoveDependentsForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveDependentsForTaskRequestBody;
}


export class RemoveDependentsForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>[];
}


export class RemoveDependentsForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeDependentsForTask200ApplicationJsonObject?: RemoveDependentsForTask200ApplicationJson;
}
