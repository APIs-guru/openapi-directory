import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserTaskListForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}


export class GetUserTaskListForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetUserTaskListForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserTaskListForUserPathParams;

  @Metadata()
  queryParams: GetUserTaskListForUserQueryParams;
}


export class GetUserTaskListForUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.UserTaskListResponse;
}


export class GetUserTaskListForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserTaskListForUser200ApplicationJsonObject?: GetUserTaskListForUser200ApplicationJson;
}
