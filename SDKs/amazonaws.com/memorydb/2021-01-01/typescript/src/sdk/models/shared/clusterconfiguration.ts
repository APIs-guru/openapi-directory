import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShardDetail } from "./sharddetail";


// ClusterConfiguration
/** 
 * A list of cluster configuration options. 
**/
export class ClusterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=NumShards" })
  numShards?: number;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=Shards", elemType: shared.ShardDetail })
  shards?: ShardDetail[];

  @Metadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @Metadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @Metadata({ data: "json, name=TopicArn" })
  topicArn?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
