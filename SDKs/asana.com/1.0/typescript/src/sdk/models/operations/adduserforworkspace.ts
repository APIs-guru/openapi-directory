import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddUserForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class AddUserForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddUserForWorkspaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.WorkspaceAddUserRequest;
}


export class AddUserForWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.UserResponse;
}


export class AddUserForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddUserForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: AddUserForWorkspaceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddUserForWorkspaceRequestBody;
}


export class AddUserForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addUserForWorkspace200ApplicationJsonObject?: AddUserForWorkspace200ApplicationJson;
}
