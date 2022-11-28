import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { UserTaskListResponse } from "./usertasklistresponse";
import { WorkspaceCompact } from "./workspacecompact";



export class WorkspaceMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_guest" })
  isGuest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=user_task_list" })
  userTaskList?: UserTaskListResponse;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}
