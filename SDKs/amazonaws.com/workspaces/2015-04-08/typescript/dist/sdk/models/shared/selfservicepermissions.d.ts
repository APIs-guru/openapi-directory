import { SpeakeasyBase } from "../../../internal/utils";
import { ReconnectEnumEnum } from "./reconnectenumenum";
/**
 * Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
**/
export declare class SelfservicePermissions extends SpeakeasyBase {
    changeComputeType?: ReconnectEnumEnum;
    increaseVolumeSize?: ReconnectEnumEnum;
    rebuildWorkspace?: ReconnectEnumEnum;
    restartWorkspace?: ReconnectEnumEnum;
    switchRunningMode?: ReconnectEnumEnum;
}
