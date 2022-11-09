import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class UpdateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class UpdateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: operations.UpdateWorkspaceRequestBodyWorkspaceCollections })
  collections?: UpdateWorkspaceRequestBodyWorkspaceCollections[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environments", elemType: operations.UpdateWorkspaceRequestBodyWorkspaceEnvironments })
  environments?: UpdateWorkspaceRequestBodyWorkspaceEnvironments[];

  @Metadata({ data: "json, name=mocks", elemType: operations.UpdateWorkspaceRequestBodyWorkspaceMocks })
  mocks?: UpdateWorkspaceRequestBodyWorkspaceMocks[];

  @Metadata({ data: "json, name=monitors", elemType: operations.UpdateWorkspaceRequestBodyWorkspaceMonitors })
  monitors?: UpdateWorkspaceRequestBodyWorkspaceMonitors[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace?: UpdateWorkspaceRequestBodyWorkspace;
}


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWorkspacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateWorkspaceRequestBody;
}


export class UpdateWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace?: UpdateWorkspace200ApplicationJsonWorkspace;
}


export class UpdateWorkspace403ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspace403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateWorkspace403ApplicationJsonError;
}


export class UpdateWorkspace404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateWorkspace404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateWorkspace404ApplicationJsonError;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateWorkspace200ApplicationJsonObject?: UpdateWorkspace200ApplicationJson;

  @Metadata()
  updateWorkspace403ApplicationJsonObject?: UpdateWorkspace403ApplicationJson;

  @Metadata()
  updateWorkspace404ApplicationJsonObject?: UpdateWorkspace404ApplicationJson;
}
