import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardDetail } from "./sharddetail";
/**
 * A list of cluster configuration options.
**/
export declare class ClusterConfiguration extends SpeakeasyBase {
    description?: string;
    engineVersion?: string;
    maintenanceWindow?: string;
    name?: string;
    nodeType?: string;
    numShards?: number;
    parameterGroupName?: string;
    port?: number;
    shards?: ShardDetail[];
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    subnetGroupName?: string;
    topicArn?: string;
    vpcId?: string;
}
