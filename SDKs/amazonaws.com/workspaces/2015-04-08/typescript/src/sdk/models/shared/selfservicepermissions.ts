import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReconnectEnumEnum } from "./reconnectenumenum";



// SelfservicePermissions
/** 
 * Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
**/
export class SelfservicePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeComputeType" })
  changeComputeType?: ReconnectEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=IncreaseVolumeSize" })
  increaseVolumeSize?: ReconnectEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=RebuildWorkspace" })
  rebuildWorkspace?: ReconnectEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=RestartWorkspace" })
  restartWorkspace?: ReconnectEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=SwitchRunningMode" })
  switchRunningMode?: ReconnectEnumEnum;
}
