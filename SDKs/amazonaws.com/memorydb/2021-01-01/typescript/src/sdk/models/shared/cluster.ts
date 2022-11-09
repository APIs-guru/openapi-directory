import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ACLName" })
  aclName?: string;

  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=AvailabilityMode" })
  availabilityMode?: AzStatusEnum;

  @Metadata({ data: "json, name=ClusterEndpoint" })
  clusterEndpoint?: Endpoint;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EnginePatchVersion" })
  enginePatchVersion?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MaintenanceWindow" })
  maintenanceWindow?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=NumberOfShards" })
  numberOfShards?: number;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;

  @Metadata({ data: "json, name=ParameterGroupStatus" })
  parameterGroupStatus?: string;

  @Metadata({ data: "json, name=PendingUpdates" })
  pendingUpdates?: ClusterPendingUpdates;

  @Metadata({ data: "json, name=SecurityGroups", elemType: shared.SecurityGroupMembership })
  securityGroups?: SecurityGroupMembership[];

  @Metadata({ data: "json, name=Shards", elemType: shared.Shard })
  shards?: Shard[];

  @Metadata({ data: "json, name=SnapshotRetentionLimit" })
  snapshotRetentionLimit?: number;

  @Metadata({ data: "json, name=SnapshotWindow" })
  snapshotWindow?: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SnsTopicStatus" })
  snsTopicStatus?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName?: string;

  @Metadata({ data: "json, name=TLSEnabled" })
  tlsEnabled?: boolean;
}
