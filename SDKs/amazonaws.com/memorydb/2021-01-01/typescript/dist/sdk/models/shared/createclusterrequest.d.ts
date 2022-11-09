import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateClusterRequest extends SpeakeasyBase {
    aclName: string;
    autoMinorVersionUpgrade?: boolean;
    clusterName: string;
    description?: string;
    engineVersion?: string;
    kmsKeyId?: string;
    maintenanceWindow?: string;
    nodeType: string;
    numReplicasPerShard?: number;
    numShards?: number;
    parameterGroupName?: string;
    port?: number;
    securityGroupIds?: string[];
    snapshotArns?: string[];
    snapshotName?: string;
    snapshotRetentionLimit?: number;
    snapshotWindow?: string;
    snsTopicArn?: string;
    subnetGroupName?: string;
    tlsEnabled?: boolean;
    tags?: Tag[];
}
