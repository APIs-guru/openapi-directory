import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";



export class WorkspaceMembershipCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}
