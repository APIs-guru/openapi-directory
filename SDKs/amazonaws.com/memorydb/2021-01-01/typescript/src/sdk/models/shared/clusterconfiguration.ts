import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShardDetail } from "./sharddetail";



// ClusterConfiguration
/** 
 * A list of cluster configuration options. 
**/
export class ClusterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=NumShards" })
  numShards?: number;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=Shards", elemType: ShardDetail })
  shards?: ShardDetail[];

  @SpeakeasyMetadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=TopicArn" })
  topicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
