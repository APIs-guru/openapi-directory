import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverState } from "./failoverstate";
import { GlobalClusterMember } from "./globalclustermember";
/**
 * A data type representing an Aurora global database.
**/
export declare class GlobalCluster extends SpeakeasyBase {
    databaseName?: string;
    deletionProtection?: boolean;
    engine?: string;
    engineVersion?: string;
    failoverState?: FailoverState;
    globalClusterArn?: string;
    globalClusterIdentifier?: string;
    globalClusterMembers?: GlobalClusterMember[];
    globalClusterResourceId?: string;
    status?: string;
    storageEncrypted?: boolean;
}
