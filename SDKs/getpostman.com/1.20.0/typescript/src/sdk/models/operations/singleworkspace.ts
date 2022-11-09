import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class SingleWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SingleWorkspacePathParams;
}


export class SingleWorkspace200ApplicationJsonWorkspaceCollections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class SingleWorkspace200ApplicationJsonWorkspaceEnvironments extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class SingleWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: operations.SingleWorkspace200ApplicationJsonWorkspaceCollections })
  collections?: SingleWorkspace200ApplicationJsonWorkspaceCollections[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environments", elemType: operations.SingleWorkspace200ApplicationJsonWorkspaceEnvironments })
  environments?: SingleWorkspace200ApplicationJsonWorkspaceEnvironments[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class SingleWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace?: SingleWorkspace200ApplicationJsonWorkspace;
}


export class SingleWorkspace404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SingleWorkspace404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: SingleWorkspace404ApplicationJsonError;
}


export class SingleWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  singleWorkspace200ApplicationJsonObject?: SingleWorkspace200ApplicationJson;

  @Metadata()
  singleWorkspace404ApplicationJsonObject?: SingleWorkspace404ApplicationJson;
}
