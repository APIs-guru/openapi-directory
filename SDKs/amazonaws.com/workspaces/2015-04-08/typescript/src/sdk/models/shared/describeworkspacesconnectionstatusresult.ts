import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceConnectionStatus } from "./workspaceconnectionstatus";



export class DescribeWorkspacesConnectionStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspacesConnectionStatus", elemType: WorkspaceConnectionStatus })
  workspacesConnectionStatus?: WorkspaceConnectionStatus[];
}
