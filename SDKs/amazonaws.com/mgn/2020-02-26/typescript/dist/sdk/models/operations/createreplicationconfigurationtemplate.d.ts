import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
export declare enum CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1"
}
export declare enum CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class CreateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    associateDefaultSecurityGroup: boolean;
    bandwidthThrottling: number;
    createPublicIp: boolean;
    dataPlaneRouting: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
    defaultLargeStagingDiskType: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
    ebsEncryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    replicationServerInstanceType: string;
    replicationServersSecurityGroupsIDs: string[];
    stagingAreaSubnetId: string;
    stagingAreaTags: Map<string, string>;
    tags?: Map<string, string>;
    useDedicatedReplicationServer: boolean;
}
export declare class CreateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
    headers: CreateReplicationConfigurationTemplateHeaders;
    request: CreateReplicationConfigurationTemplateRequestBody;
}
export declare class CreateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
