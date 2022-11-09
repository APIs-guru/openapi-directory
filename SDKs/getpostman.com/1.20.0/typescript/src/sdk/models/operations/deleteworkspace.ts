import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class DeleteWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWorkspacePathParams;
}


export class DeleteWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace?: DeleteWorkspace200ApplicationJsonWorkspace;
}


export class DeleteWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteWorkspace200ApplicationJsonObject?: DeleteWorkspace200ApplicationJson;
}
