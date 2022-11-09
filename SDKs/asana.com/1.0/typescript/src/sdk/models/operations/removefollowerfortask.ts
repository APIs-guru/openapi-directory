import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveFollowerForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveFollowerForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveFollowerForTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TaskRemoveFollowersRequest;
}


export class RemoveFollowerForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveFollowerForTaskPathParams;

  @Metadata()
  queryParams: RemoveFollowerForTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveFollowerForTaskRequestBody;
}


export class RemoveFollowerForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveFollowerForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeFollowerForTask200ApplicationJsonObject?: RemoveFollowerForTask200ApplicationJson;
}
