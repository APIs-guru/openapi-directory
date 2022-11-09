import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicaConfigurationRequest } from "./replicaconfigurationrequest";
import { ShardConfigurationRequest } from "./shardconfigurationrequest";


export class UpdateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLName" })
  aclName?: string;

  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @Metadata({ data: "json, name=ReplicaConfiguration" })
  replicaConfiguration?: ReplicaConfigurationRequest;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=ShardConfiguration" })
  shardConfiguration?: ShardConfigurationRequest;

  @Metadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @Metadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SnsTopicStatus" })
  snsTopicStatus?: string;
}
