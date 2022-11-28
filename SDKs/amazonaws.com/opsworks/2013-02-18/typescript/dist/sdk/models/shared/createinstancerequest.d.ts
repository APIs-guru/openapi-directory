import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
export declare class CreateInstanceRequest extends SpeakeasyBase {
    agentVersion?: string;
    amiId?: string;
    architecture?: ArchitectureEnum;
    autoScalingType?: AutoScalingTypeEnum;
    availabilityZone?: string;
    blockDeviceMappings?: BlockDeviceMapping[];
    ebsOptimized?: boolean;
    hostname?: string;
    installUpdatesOnBoot?: boolean;
    instanceType: string;
    layerIds: string[];
    os?: string;
    rootDeviceType?: RootDeviceTypeEnum;
    sshKeyName?: string;
    stackId: string;
    subnetId?: string;
    tenancy?: string;
    virtualizationType?: string;
}
