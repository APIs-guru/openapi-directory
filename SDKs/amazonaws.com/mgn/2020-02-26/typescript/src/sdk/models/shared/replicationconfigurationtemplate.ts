import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";


export class ReplicationConfigurationTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup?: boolean;

  @Metadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling?: number;

  @Metadata({ data: "json, name=createPublicIP" })
  createPublicIp?: boolean;

  @Metadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;

  @Metadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;

  @Metadata({ data: "json, name=ebsEncryption" })
  ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;

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

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer?: boolean;
}
