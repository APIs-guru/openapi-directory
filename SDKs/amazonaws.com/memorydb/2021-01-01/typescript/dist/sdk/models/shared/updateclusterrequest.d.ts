import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicaConfigurationRequest } from "./replicaconfigurationrequest";
import { ShardConfigurationRequest } from "./shardconfigurationrequest";
export declare class UpdateClusterRequest extends SpeakeasyBase {
    aclName?: string;
    clusterName: string;
    description?: string;
    engineVersion?: string;
    maintenanceWindow?: string;
    nodeType?: string;
    parameterGroupName?: string;
    replicaConfiguration?: ReplicaConfigurationRequest;
    securityGroupIds?: string[];
    shardConfiguration?: ShardConfigurationRequest;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snsTopicArn?: string;
    snsTopicStatus?: string;
}
