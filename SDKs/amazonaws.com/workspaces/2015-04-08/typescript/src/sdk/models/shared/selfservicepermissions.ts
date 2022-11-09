import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReconnectEnumEnum } from "./reconnectenumenum";
import { ReconnectEnumEnum } from "./reconnectenumenum";
import { ReconnectEnumEnum } from "./reconnectenumenum";
import { ReconnectEnumEnum } from "./reconnectenumenum";
import { ReconnectEnumEnum } from "./reconnectenumenum";


// SelfservicePermissions
/** 
 * Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
**/
export class SelfservicePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeComputeType" })
  changeComputeType?: ReconnectEnumEnum;

  @Metadata({ data: "json, name=IncreaseVolumeSize" })
  increaseVolumeSize?: ReconnectEnumEnum;

  @Metadata({ data: "json, name=RebuildWorkspace" })
  rebuildWorkspace?: ReconnectEnumEnum;

  @Metadata({ data: "json, name=RestartWorkspace" })
  restartWorkspace?: ReconnectEnumEnum;

  @Metadata({ data: "json, name=SwitchRunningMode" })
  switchRunningMode?: ReconnectEnumEnum;
}
