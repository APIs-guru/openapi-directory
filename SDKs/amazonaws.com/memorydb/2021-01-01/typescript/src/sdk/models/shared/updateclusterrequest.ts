import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaConfigurationRequest } from "./replicaconfigurationrequest";
import { ShardConfigurationRequest } from "./shardconfigurationrequest";



export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaConfiguration" })
  replicaConfiguration?: ReplicaConfigurationRequest;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ShardConfiguration" })
  shardConfiguration?: ShardConfigurationRequest;

  @SpeakeasyMetadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicStatus" })
  snsTopicStatus?: string;
}
