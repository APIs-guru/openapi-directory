import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AzStatusEnum } from "./azstatusenum";
import { Endpoint } from "./endpoint";
import { ClusterPendingUpdates } from "./clusterpendingupdates";
import { SecurityGroupMembership } from "./securitygroupmembership";
import { Shard } from "./shard";



// Cluster
/** 
 * Contains all of the attributes of a specific cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName?: string;

  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityMode" })
  availabilityMode?: AzStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ClusterEndpoint" })
  clusterEndpoint?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EnginePatchVersion" })
  enginePatchVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfShards" })
  numberOfShards?: number;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupStatus" })
  parameterGroupStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=PendingUpdates" })
  pendingUpdates?: ClusterPendingUpdates;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups", elemType: SecurityGroupMembership })
  securityGroups?: SecurityGroupMembership[];

  @SpeakeasyMetadata({ data: "json, name=Shards", elemType: Shard })
  shards?: Shard[];

  @SpeakeasyMetadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicStatus" })
  snsTopicStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=TLSEnabled" })
  tlsEnabled?: boolean;
}
