import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationDataPlaneRoutingEnum } from "./replicationconfigurationdataplaneroutingenum";
import { ReplicationConfigurationDefaultLargeStagingDiskTypeEnum } from "./replicationconfigurationdefaultlargestagingdisktypeenum";
import { ReplicationConfigurationEbsEncryptionEnum } from "./replicationconfigurationebsencryptionenum";
import { ReplicationConfigurationReplicatedDisk } from "./replicationconfigurationreplicateddisk";



export class ReplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associateDefaultSecurityGroup" })
  associateDefaultSecurityGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bandwidthThrottling" })
  bandwidthThrottling?: number;

  @SpeakeasyMetadata({ data: "json, name=createPublicIP" })
  createPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataPlaneRouting" })
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRoutingEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultLargeStagingDiskType" })
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryption" })
  ebsEncryption?: ReplicationConfigurationEbsEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ebsEncryptionKeyArn" })
  ebsEncryptionKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replicatedDisks", elemType: ReplicationConfigurationReplicatedDisk })
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  @SpeakeasyMetadata({ data: "json, name=replicationServerInstanceType" })
  replicationServerInstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationServersSecurityGroupsIDs" })
  replicationServersSecurityGroupsIDs?: string[];

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=stagingAreaSubnetId" })
  stagingAreaSubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=stagingAreaTags" })
  stagingAreaTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useDedicatedReplicationServer" })
  useDedicatedReplicationServer?: boolean;
}
