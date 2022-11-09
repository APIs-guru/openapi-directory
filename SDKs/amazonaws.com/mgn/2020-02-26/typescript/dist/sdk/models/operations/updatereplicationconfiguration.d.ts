import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateReplicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
export declare enum UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1"
}
export declare enum UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class UpdateReplicationConfigurationRequestBody extends SpeakeasyBase {
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIp?: boolean;
    dataPlaneRouting?: UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    name?: string;
    replicatedDisks?: shared.ReplicationConfigurationReplicatedDisk[];
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    sourceServerId: string;
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Map<string, string>;
    useDedicatedReplicationServer?: boolean;
}
export declare class UpdateReplicationConfigurationRequest extends SpeakeasyBase {
    headers: UpdateReplicationConfigurationHeaders;
    request: UpdateReplicationConfigurationRequestBody;
}
export declare class UpdateReplicationConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    replicationConfiguration?: shared.ReplicationConfiguration;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
