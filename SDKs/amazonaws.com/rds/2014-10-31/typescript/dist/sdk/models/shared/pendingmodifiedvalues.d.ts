import { SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
import { ProcessorFeature } from "./processorfeature";
/**
 *  This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window.
**/
export declare class PendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbSubnetGroupName?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    iops?: number;
    licenseModel?: string;
    masterUserPassword?: string;
    multiAz?: boolean;
    pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
    port?: number;
    processorFeatures?: ProcessorFeature[];
    storageType?: string;
}
