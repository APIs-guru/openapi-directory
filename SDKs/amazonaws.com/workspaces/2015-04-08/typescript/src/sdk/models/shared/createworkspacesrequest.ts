import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceRequest } from "./workspacerequest";



export class CreateWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workspaces", elemType: WorkspaceRequest })
  workspaces: WorkspaceRequest[];
}
