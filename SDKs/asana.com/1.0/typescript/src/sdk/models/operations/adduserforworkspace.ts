import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddUserForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class AddUserForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddUserForWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WorkspaceAddUserRequest;
}


export class AddUserForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddUserForWorkspacePathParams;

  @Metadata()
  queryParams: AddUserForWorkspaceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddUserForWorkspaceRequestBody;
}


export class AddUserForWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.UserResponse;
}


export class AddUserForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addUserForWorkspace200ApplicationJsonObject?: AddUserForWorkspace200ApplicationJson;
}
