import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";
import { ReplicationConfigurationReplicatedDisk } from "./replicationconfigurationreplicateddisk";
export declare class ReplicationConfiguration extends SpeakeasyBase {
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIp?: boolean;
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    name?: string;
    replicatedDisks?: ReplicationConfigurationReplicatedDisk[];
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    sourceServerId?: string;
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Map<string, string>;
    useDedicatedReplicationServer?: boolean;
}
