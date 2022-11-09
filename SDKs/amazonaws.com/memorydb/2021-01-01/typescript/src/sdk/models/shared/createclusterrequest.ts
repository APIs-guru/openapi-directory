import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLName" })
  aclName: string;

  @Metadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType: string;

  @Metadata({ data: "json, name=NumReplicasPerShard" })
  numReplicasPerShard?: number;

  @Metadata({ data: "json, name=NumShards" })
  numShards?: number;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SnapshotArns" })
  snapshotArns?: string[];

  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName?: string;

  @Metadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @Metadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @Metadata({ data: "json, name=TLSEnabled" })
  tlsEnabled?: boolean;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
