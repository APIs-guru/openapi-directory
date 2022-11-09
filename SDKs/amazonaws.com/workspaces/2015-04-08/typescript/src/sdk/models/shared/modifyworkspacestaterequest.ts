import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetWorkspaceStateEnum } from "./targetworkspacestateenum";


export class ModifyWorkspaceStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;

  @Metadata({ data: "json, name=WorkspaceState" })
  workspaceState: TargetWorkspaceStateEnum;
}
