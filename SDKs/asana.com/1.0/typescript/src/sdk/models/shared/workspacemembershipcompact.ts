import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";


export class WorkspaceMembershipCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=user" })
  user?: UserCompact;

  @Metadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}
