import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { UserTaskListResponse } from "./usertasklistresponse";
import { WorkspaceCompact } from "./workspacecompact";
export declare class WorkspaceMembershipResponse extends SpeakeasyBase {
    gid?: string;
    isActive?: boolean;
    isAdmin?: boolean;
    isGuest?: boolean;
    resourceType?: string;
    user?: UserCompact;
    userTaskList?: UserTaskListResponse;
    workspace?: WorkspaceCompact;
}
