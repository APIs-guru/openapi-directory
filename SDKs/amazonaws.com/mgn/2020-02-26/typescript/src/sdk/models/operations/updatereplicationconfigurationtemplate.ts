import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
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

export enum UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP"
,    PublicIp = "PUBLIC_IP"
}

export enum UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2"
,    St1 = "ST1"
}

export enum UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT"
,    Custom = "CUSTOM"
}


export class UpdateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup?: boolean;

  @Metadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling?: number;

  @Metadata({ data: "json, name=createPublicIP" })
  createPublicIp?: boolean;

  @Metadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting?: UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;

  @Metadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType?: UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;

  @Metadata({ data: "json, name=ebsEncryption" })
  ebsEncryption?: UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;

  @Metadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @Metadata({ data: "json, name=replicationConfigurationTemplateID" })
  replicationConfigurationTemplateId: string;

  @Metadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType?: string;

  @Metadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs?: string[];

  @Metadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId?: string;

  @Metadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags?: Map<string, string>;

  @Metadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer?: boolean;
}


export class UpdateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateReplicationConfigurationTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateReplicationConfigurationTemplateRequestBody;
}


export class UpdateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
