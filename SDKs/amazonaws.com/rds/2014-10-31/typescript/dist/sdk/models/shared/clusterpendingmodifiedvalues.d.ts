import { SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
/**
 * This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
**/
export declare class ClusterPendingModifiedValues extends SpeakeasyBase {
    dbClusterIdentifier?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    masterUserPassword?: string;
    pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}
