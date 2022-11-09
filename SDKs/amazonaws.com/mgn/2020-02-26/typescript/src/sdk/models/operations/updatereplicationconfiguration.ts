import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateReplicationConfigurationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP"
,    PublicIp = "PUBLIC_IP"
}

export enum UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2"
,    St1 = "ST1"
}

export enum UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT"
,    Custom = "CUSTOM"
}


export class UpdateReplicationConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup?: boolean;

  @Metadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling?: number;

  @Metadata({ data: "json, name=createPublicIP" })
  createPublicIp?: boolean;

  @Metadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting?: UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;

  @Metadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType?: UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;

  @Metadata({ data: "json, name=ebsEncryption" })
  ebsEncryption?: UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;

  @Metadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=replicatedDisks", elemType: shared.ReplicationConfigurationReplicatedDisk })
  replicatedDisks?: shared.ReplicationConfigurationReplicatedDisk[];

  @Metadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType?: string;

  @Metadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs?: string[];

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;

  @Metadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId?: string;

  @Metadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags?: Map<string, string>;

  @Metadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer?: boolean;
}


export class UpdateReplicationConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateReplicationConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateReplicationConfigurationRequestBody;
}


export class UpdateReplicationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  replicationConfiguration?: shared.ReplicationConfiguration;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
