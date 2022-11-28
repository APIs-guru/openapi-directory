import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveUserForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class RemoveUserForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveUserForWorkspaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.WorkspaceRemoveUserRequest;
}


export class RemoveUserForWorkspace204ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveUserForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveUserForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveUserForWorkspaceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveUserForWorkspaceRequestBody;
}


export class RemoveUserForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeUserForWorkspace204ApplicationJsonObject?: RemoveUserForWorkspace204ApplicationJson;
}
