import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserCompact } from "./usercompact";
import { UserTaskListResponse } from "./usertasklistresponse";
import { WorkspaceCompact } from "./workspacecompact";


export class WorkspaceMembershipResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @Metadata({ data: "json, name=is_guest" })
  isGuest?: boolean;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=user" })
  user?: UserCompact;

  @Metadata({ data: "json, name=user_task_list" })
  userTaskList?: UserTaskListResponse;

  @Metadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}
