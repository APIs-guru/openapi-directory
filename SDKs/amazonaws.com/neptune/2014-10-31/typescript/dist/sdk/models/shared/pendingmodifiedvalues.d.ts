import { SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
/**
 *  This data type is used as a response element in the <a>ModifyDBInstance</a> action.
**/
export declare class PendingModifiedValues extends SpeakeasyBase {
    allocatedStorage?: number;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier?: string;
    dbSubnetGroupName?: string;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword?: string;
    multiAz?: boolean;
    pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
    port?: number;
    storageType?: string;
}
