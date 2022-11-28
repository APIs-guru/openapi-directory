import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { UserCompact } from "./usercompact";
export declare enum ProjectMembershipResponseWriteAccessEnum {
    FullWrite = "full_write",
    CommentOnly = "comment_only"
}
export declare class ProjectMembershipResponse extends SpeakeasyBase {
    gid?: string;
    project?: ProjectCompact;
    resourceType?: string;
    user?: UserCompact;
    writeAccess?: ProjectMembershipResponseWriteAccessEnum;
}
