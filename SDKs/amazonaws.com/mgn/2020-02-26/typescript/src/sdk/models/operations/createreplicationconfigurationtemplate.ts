import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
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

export enum CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}

export enum CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1"
}

export enum CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}


export class CreateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup: boolean;

  @SpeakeasyMetadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling: number;

  @SpeakeasyMetadata({ data: "json, name=createPublicIP" })
  createPublicIp: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryption" })
  ebsEncryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType: string;

  @SpeakeasyMetadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs: string[];

  @SpeakeasyMetadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId: string;

  @SpeakeasyMetadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer: boolean;
}


export class CreateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateReplicationConfigurationTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateReplicationConfigurationTemplateRequestBody;
}


export class CreateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
