import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserTaskListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_task_list_gid" })
  userTaskListGid: string;
}


export class GetUserTaskListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetUserTaskList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.UserTaskListResponse;
}


export class GetUserTaskListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserTaskListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserTaskListQueryParams;
}


export class GetUserTaskListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserTaskList200ApplicationJsonObject?: GetUserTaskList200ApplicationJson;
}
