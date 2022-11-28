import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class SingleWorkspace200ApplicationJsonWorkspaceCollections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class SingleWorkspace200ApplicationJsonWorkspaceEnvironments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class SingleWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: SingleWorkspace200ApplicationJsonWorkspaceCollections })
  collections?: SingleWorkspace200ApplicationJsonWorkspaceCollections[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environments", elemType: SingleWorkspace200ApplicationJsonWorkspaceEnvironments })
  environments?: SingleWorkspace200ApplicationJsonWorkspaceEnvironments[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SingleWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: SingleWorkspace200ApplicationJsonWorkspace;
}


export class SingleWorkspace404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SingleWorkspace404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: SingleWorkspace404ApplicationJsonError;
}


export class SingleWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SingleWorkspacePathParams;
}


export class SingleWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  singleWorkspace200ApplicationJsonObject?: SingleWorkspace200ApplicationJson;

  @SpeakeasyMetadata()
  singleWorkspace404ApplicationJsonObject?: SingleWorkspace404ApplicationJson;
}
