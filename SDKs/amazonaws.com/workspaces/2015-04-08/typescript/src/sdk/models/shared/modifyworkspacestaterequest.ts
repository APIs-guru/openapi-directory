import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetWorkspaceStateEnum } from "./targetworkspacestateenum";



export class ModifyWorkspaceStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceState" })
  workspaceState: TargetWorkspaceStateEnum;
}
