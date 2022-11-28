import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsPendingCloudWatchLogsExports } from "./awsrdspendingcloudwatchlogsexports";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
/**
 * Changes to a DB instance that are currently pending.
**/
export declare class AwsRdsDbPendingModifiedValues extends SpeakeasyBase {
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
    pendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
    port?: number;
    processorFeatures?: AwsRdsDbProcessorFeature[];
    storageType?: string;
}
