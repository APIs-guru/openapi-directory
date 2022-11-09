import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceRequest } from "./workspacerequest";


export class CreateWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workspaces", elemType: shared.WorkspaceRequest })
  workspaces: WorkspaceRequest[];
}
