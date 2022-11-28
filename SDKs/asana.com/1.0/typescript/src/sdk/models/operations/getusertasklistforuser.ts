import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserTaskListForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}


export class GetUserTaskListForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetUserTaskListForUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.UserTaskListResponse;
}


export class GetUserTaskListForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserTaskListForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserTaskListForUserQueryParams;
}


export class GetUserTaskListForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserTaskListForUser200ApplicationJsonObject?: GetUserTaskListForUser200ApplicationJson;
}
