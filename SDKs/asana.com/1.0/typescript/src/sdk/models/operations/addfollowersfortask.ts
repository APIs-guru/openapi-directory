import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFollowersForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class AddFollowersForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddFollowersForTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TaskAddFollowersRequest;
}


export class AddFollowersForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddFollowersForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddFollowersForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: AddFollowersForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddFollowersForTaskRequestBody;
}


export class AddFollowersForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addFollowersForTask200ApplicationJsonObject?: AddFollowersForTask200ApplicationJson;
}
