import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class CreateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class CreateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: operations.CreateWorkspaceRequestBodyWorkspaceCollections })
  collections?: CreateWorkspaceRequestBodyWorkspaceCollections[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environments", elemType: operations.CreateWorkspaceRequestBodyWorkspaceEnvironments })
  environments?: CreateWorkspaceRequestBodyWorkspaceEnvironments[];

  @Metadata({ data: "json, name=mocks", elemType: operations.CreateWorkspaceRequestBodyWorkspaceMocks })
  mocks?: CreateWorkspaceRequestBodyWorkspaceMocks[];

  @Metadata({ data: "json, name=monitors", elemType: operations.CreateWorkspaceRequestBodyWorkspaceMonitors })
  monitors?: CreateWorkspaceRequestBodyWorkspaceMonitors[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class CreateWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace?: CreateWorkspaceRequestBodyWorkspace;
}


export class CreateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateWorkspaceRequestBody;
}


export class CreateWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace?: CreateWorkspace200ApplicationJsonWorkspace;
}


export class CreateWorkspace400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateWorkspace400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateWorkspace400ApplicationJsonError;
}


export class CreateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createWorkspace200ApplicationJsonObject?: CreateWorkspace200ApplicationJson;

  @Metadata()
  createWorkspace400ApplicationJsonObject?: CreateWorkspace400ApplicationJson;
}
