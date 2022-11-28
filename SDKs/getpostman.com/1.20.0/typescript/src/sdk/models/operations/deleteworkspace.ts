import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: DeleteWorkspace200ApplicationJsonWorkspace;
}


export class DeleteWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWorkspacePathParams;
}


export class DeleteWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteWorkspace200ApplicationJsonObject?: DeleteWorkspace200ApplicationJson;
}
