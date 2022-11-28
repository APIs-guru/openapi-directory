import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { CpuOptions } from "./cpuoptions";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { InstanceState } from "./instancestate";
/**
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
**/
export declare class Instance extends SpeakeasyBase {
    amiLaunchIndex?: number;
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    cpuOptions?: CpuOptions;
    createdAt?: Date;
    imageId?: string;
    instanceId?: string;
    instanceType?: string;
    privateIpAddress?: string;
    publicIpAddress?: string;
    rootDeviceName?: string;
    securityGroups?: SecurityGroupIdentifier[];
    state?: InstanceState;
    updatedAt?: Date;
}
