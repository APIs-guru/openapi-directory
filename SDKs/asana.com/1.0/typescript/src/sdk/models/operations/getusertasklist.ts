import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserTaskListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_task_list_gid" })
  userTaskListGid: string;
}


export class GetUserTaskListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetUserTaskListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserTaskListPathParams;

  @Metadata()
  queryParams: GetUserTaskListQueryParams;
}


export class GetUserTaskList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.UserTaskListResponse;
}


export class GetUserTaskListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserTaskList200ApplicationJsonObject?: GetUserTaskList200ApplicationJson;
}
