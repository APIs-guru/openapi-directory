import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateReplicationConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}

export enum UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1"
}

export enum UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}


export class UpdateReplicationConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling?: number;

  @SpeakeasyMetadata({ data: "json, name=createPublicIP" })
  createPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting?: UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType?: UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryption" })
  ebsEncryption?: UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replicatedDisks", elemType: shared.ReplicationConfigurationReplicatedDisk })
  replicatedDisks?: shared.ReplicationConfigurationReplicatedDisk[];

  @SpeakeasyMetadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs?: string[];

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;

  @SpeakeasyMetadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer?: boolean;
}


export class UpdateReplicationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateReplicationConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateReplicationConfigurationRequestBody;
}


export class UpdateReplicationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  replicationConfiguration?: shared.ReplicationConfiguration;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
