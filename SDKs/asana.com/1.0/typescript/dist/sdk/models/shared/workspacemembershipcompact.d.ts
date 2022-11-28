import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";
export declare class WorkspaceMembershipCompact extends SpeakeasyBase {
    gid?: string;
    resourceType?: string;
    user?: UserCompact;
    workspace?: WorkspaceCompact;
}
