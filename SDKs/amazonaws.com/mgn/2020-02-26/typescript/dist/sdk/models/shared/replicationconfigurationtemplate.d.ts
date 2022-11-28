import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";
export declare class ReplicationConfigurationTemplate extends SpeakeasyBase {
    arn?: string;
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIp?: boolean;
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    replicationConfigurationTemplateId: string;
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Map<string, string>;
    tags?: Map<string, string>;
    useDedicatedReplicationServer?: boolean;
}
