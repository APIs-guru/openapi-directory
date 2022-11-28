import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { AutoScalingTypeEnum } from "./autoscalingtypeenum";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { ReportedOs } from "./reportedos";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";
/**
 * Describes an instance.
**/
export declare class Instance extends SpeakeasyBase {
    agentVersion?: string;
    amiId?: string;
    architecture?: ArchitectureEnum;
    arn?: string;
    autoScalingType?: AutoScalingTypeEnum;
    availabilityZone?: string;
    blockDeviceMappings?: BlockDeviceMapping[];
    createdAt?: string;
    ebsOptimized?: boolean;
    ec2InstanceId?: string;
    ecsClusterArn?: string;
    ecsContainerInstanceArn?: string;
    elasticIp?: string;
    hostname?: string;
    infrastructureClass?: string;
    installUpdatesOnBoot?: boolean;
    instanceId?: string;
    instanceProfileArn?: string;
    instanceType?: string;
    lastServiceErrorId?: string;
    layerIds?: string[];
    os?: string;
    platform?: string;
    privateDns?: string;
    privateIp?: string;
    publicDns?: string;
    publicIp?: string;
    registeredBy?: string;
    reportedAgentVersion?: string;
    reportedOs?: ReportedOs;
    rootDeviceType?: RootDeviceTypeEnum;
    rootDeviceVolumeId?: string;
    securityGroupIds?: string[];
    sshHostDsaKeyFingerprint?: string;
    sshHostRsaKeyFingerprint?: string;
    sshKeyName?: string;
    stackId?: string;
    status?: string;
    subnetId?: string;
    tenancy?: string;
    virtualizationType?: VirtualizationTypeEnum;
}
