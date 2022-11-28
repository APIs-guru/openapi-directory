import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
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

export enum UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}

export enum UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1"
}

export enum UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}


export class UpdateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling?: number;

  @SpeakeasyMetadata({ data: "json, name=createPublicIP" })
  createPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting?: UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType?: UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryption" })
  ebsEncryption?: UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationConfigurationTemplateID" })
  replicationConfigurationTemplateId: string;

  @SpeakeasyMetadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs?: string[];

  @SpeakeasyMetadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer?: boolean;
}


export class UpdateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateReplicationConfigurationTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateReplicationConfigurationTemplateRequestBody;
}


export class UpdateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
