import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType: string;

  @SpeakeasyMetadata({ data: "json, name=NumReplicasPerShard" })
  numReplicasPerShard?: number;

  @SpeakeasyMetadata({ data: "json, name=NumShards" })
  numShards?: number;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SnapshotArns" })
  snapshotArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=TLSEnabled" })
  tlsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
