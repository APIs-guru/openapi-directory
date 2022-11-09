import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveUserForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class RemoveUserForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveUserForWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WorkspaceRemoveUserRequest;
}


export class RemoveUserForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveUserForWorkspacePathParams;

  @Metadata()
  queryParams: RemoveUserForWorkspaceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveUserForWorkspaceRequestBody;
}


export class RemoveUserForWorkspace204ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveUserForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeUserForWorkspace204ApplicationJsonObject?: RemoveUserForWorkspace204ApplicationJson;
}
