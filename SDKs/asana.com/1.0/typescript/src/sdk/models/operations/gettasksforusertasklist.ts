import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTasksForUserTaskListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_task_list_gid" })
  userTaskListGid: string;
}


export class GetTasksForUserTaskListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed_since" })
  completedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTasksForUserTaskList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact })
  data?: shared.TaskCompact[];
}


export class GetTasksForUserTaskListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTasksForUserTaskListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTasksForUserTaskListQueryParams;
}


export class GetTasksForUserTaskListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTasksForUserTaskList200ApplicationJsonObject?: GetTasksForUserTaskList200ApplicationJson;
}
