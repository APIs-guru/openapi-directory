import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";
export declare class UpdateInstanceRequest extends SpeakeasyBase {
    agentVersion?: string;
    amiId?: string;
    architecture?: ArchitectureEnum;
    autoScalingType?: AutoScalingTypeEnum;
    ebsOptimized?: boolean;
    hostname?: string;
    installUpdatesOnBoot?: boolean;
    instanceId: string;
    instanceType?: string;
    layerIds?: string[];
    os?: string;
    sshKeyName?: string;
}
