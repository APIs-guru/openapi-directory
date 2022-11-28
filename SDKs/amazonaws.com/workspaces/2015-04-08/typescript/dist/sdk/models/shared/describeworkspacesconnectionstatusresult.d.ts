import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceConnectionStatus } from "./workspaceconnectionstatus";
export declare class DescribeWorkspacesConnectionStatusResult extends SpeakeasyBase {
    nextToken?: string;
    workspacesConnectionStatus?: WorkspaceConnectionStatus[];
}
