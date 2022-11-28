import { SpeakeasyBase } from "../../../internal/utils";
import { AzStatusEnum } from "./azstatusenum";
import { Endpoint } from "./endpoint";
import { ClusterPendingUpdates } from "./clusterpendingupdates";
import { SecurityGroupMembership } from "./securitygroupmembership";
import { Shard } from "./shard";
/**
 * Contains all of the attributes of a specific cluster.
**/
export declare class Cluster extends SpeakeasyBase {
    aclName?: string;
    arn?: string;
    autoMinorVersionUpgrade?: boolean;
    availabilityMode?: AzStatusEnum;
    clusterEndpoint?: Endpoint;
    description?: string;
    enginePatchVersion?: string;
    engineVersion?: string;
    kmsKeyId?: string;
    maintenanceWindow?: string;
    name?: string;
    nodeType?: string;
    numberOfShards?: number;
    parameterGroupName?: string;
    parameterGroupStatus?: string;
    pendingUpdates?: ClusterPendingUpdates;
    securityGroups?: SecurityGroupMembership[];
    shards?: Shard[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snsTopicArn?: string;
    snsTopicStatus?: string;
    status?: string;
    subnetGroupName?: string;
    tlsEnabled?: boolean;
}
