import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).
**/
export declare class FailedWorkspaceChangeRequest extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    workspaceId?: string;
}
