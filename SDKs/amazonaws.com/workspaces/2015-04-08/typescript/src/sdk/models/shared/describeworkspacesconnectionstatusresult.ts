import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceConnectionStatus } from "./workspaceconnectionstatus";


export class DescribeWorkspacesConnectionStatusResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkspacesConnectionStatus", elemType: shared.WorkspaceConnectionStatus })
  workspacesConnectionStatus?: WorkspaceConnectionStatus[];
}
