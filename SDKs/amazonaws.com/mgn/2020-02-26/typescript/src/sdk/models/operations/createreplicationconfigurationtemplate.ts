import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
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

export enum CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP"
,    PublicIp = "PUBLIC_IP"
}

export enum CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2"
,    St1 = "ST1"
}

export enum CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT"
,    Custom = "CUSTOM"
}


export class CreateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup: boolean;

  @Metadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling: number;

  @Metadata({ data: "json, name=createPublicIP" })
  createPublicIp: boolean;

  @Metadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;

  @Metadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;

  @Metadata({ data: "json, name=ebsEncryption" })
  ebsEncryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;

  @Metadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @Metadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType: string;

  @Metadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs: string[];

  @Metadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId: string;

  @Metadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags: Map<string, string>;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer: boolean;
}


export class CreateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateReplicationConfigurationTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateReplicationConfigurationTemplateRequestBody;
}


export class CreateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
