import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class UpdateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: UpdateWorkspaceRequestBodyWorkspaceCollections })
  collections?: UpdateWorkspaceRequestBodyWorkspaceCollections[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environments", elemType: UpdateWorkspaceRequestBodyWorkspaceEnvironments })
  environments?: UpdateWorkspaceRequestBodyWorkspaceEnvironments[];

  @SpeakeasyMetadata({ data: "json, name=mocks", elemType: UpdateWorkspaceRequestBodyWorkspaceMocks })
  mocks?: UpdateWorkspaceRequestBodyWorkspaceMocks[];

  @SpeakeasyMetadata({ data: "json, name=monitors", elemType: UpdateWorkspaceRequestBodyWorkspaceMonitors })
  monitors?: UpdateWorkspaceRequestBodyWorkspaceMonitors[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: UpdateWorkspaceRequestBodyWorkspace;
}


export class UpdateWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: UpdateWorkspace200ApplicationJsonWorkspace;
}


export class UpdateWorkspace403ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspace403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: UpdateWorkspace403ApplicationJsonError;
}


export class UpdateWorkspace404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspace404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: UpdateWorkspace404ApplicationJsonError;
}


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWorkspacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateWorkspaceRequestBody;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateWorkspace200ApplicationJsonObject?: UpdateWorkspace200ApplicationJson;

  @SpeakeasyMetadata()
  updateWorkspace403ApplicationJsonObject?: UpdateWorkspace403ApplicationJson;

  @SpeakeasyMetadata()
  updateWorkspace404ApplicationJsonObject?: UpdateWorkspace404ApplicationJson;
}
