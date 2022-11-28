import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFollowerForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class RemoveFollowerForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveFollowerForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskRemoveFollowersRequest;
}


export class RemoveFollowerForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveFollowerForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveFollowerForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveFollowerForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveFollowerForTaskRequestBody;
}


export class RemoveFollowerForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeFollowerForTask200ApplicationJsonObject?: RemoveFollowerForTask200ApplicationJson;
}
