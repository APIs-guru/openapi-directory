import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class CreateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class CreateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: CreateWorkspaceRequestBodyWorkspaceCollections })
  collections?: CreateWorkspaceRequestBodyWorkspaceCollections[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environments", elemType: CreateWorkspaceRequestBodyWorkspaceEnvironments })
  environments?: CreateWorkspaceRequestBodyWorkspaceEnvironments[];

  @SpeakeasyMetadata({ data: "json, name=mocks", elemType: CreateWorkspaceRequestBodyWorkspaceMocks })
  mocks?: CreateWorkspaceRequestBodyWorkspaceMocks[];

  @SpeakeasyMetadata({ data: "json, name=monitors", elemType: CreateWorkspaceRequestBodyWorkspaceMonitors })
  monitors?: CreateWorkspaceRequestBodyWorkspaceMonitors[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class CreateWorkspaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: CreateWorkspaceRequestBodyWorkspace;
}


export class CreateWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: CreateWorkspace200ApplicationJsonWorkspace;
}


export class CreateWorkspace400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateWorkspace400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateWorkspace400ApplicationJsonError;
}


export class CreateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateWorkspaceRequestBody;
}


export class CreateWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createWorkspace200ApplicationJsonObject?: CreateWorkspace200ApplicationJson;

  @SpeakeasyMetadata()
  createWorkspace400ApplicationJsonObject?: CreateWorkspace400ApplicationJson;
}
