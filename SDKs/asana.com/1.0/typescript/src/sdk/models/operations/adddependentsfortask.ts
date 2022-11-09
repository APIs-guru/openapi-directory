import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddDependentsForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddDependentsForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddDependentsForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ModifyDependentsRequest;
}


export class AddDependentsForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddDependentsForTaskPathParams;

  @Metadata()
  queryParams: AddDependentsForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddDependentsForTaskRequestBody;
}


export class AddDependentsForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TaskCompact })
  data?: shared.TaskCompact[];
}


export class AddDependentsForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addDependentsForTask200ApplicationJsonObject?: AddDependentsForTask200ApplicationJson;
}
