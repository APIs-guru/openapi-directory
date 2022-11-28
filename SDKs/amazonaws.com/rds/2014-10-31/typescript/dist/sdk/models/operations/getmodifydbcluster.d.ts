import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbClusterActionEnum {
    ModifyDbCluster = "ModifyDBCluster"
}
/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export declare class GetModifyDbClusterCloudwatchLogsExportConfiguration extends SpeakeasyBase {
    disableLogTypes?: string[];
    enableLogTypes?: string[];
}
/**
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export declare class GetModifyDbClusterScalingConfiguration extends SpeakeasyBase {
    autoPause?: boolean;
    maxCapacity?: number;
    minCapacity?: number;
    secondsBeforeTimeout?: number;
    secondsUntilAutoPause?: number;
    timeoutAction?: string;
}
export declare enum GetModifyDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbClusterQueryParams extends SpeakeasyBase {
    action: GetModifyDbClusterActionEnum;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    backtrackWindow?: number;
    backupRetentionPeriod?: number;
    cloudwatchLogsExportConfiguration?: GetModifyDbClusterCloudwatchLogsExportConfiguration;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbClusterParameterGroupName?: string;
    dbInstanceParameterGroupName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIamRoleName?: string;
    enableGlobalWriteForwarding?: boolean;
    enableHttpEndpoint?: boolean;
    enableIamDatabaseAuthentication?: boolean;
    engineVersion?: string;
    masterUserPassword?: string;
    newDbClusterIdentifier?: string;
    optionGroupName?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    scalingConfiguration?: GetModifyDbClusterScalingConfiguration;
    version: GetModifyDbClusterVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbClusterRequest extends SpeakeasyBase {
    queryParams: GetModifyDbClusterQueryParams;
    headers: GetModifyDbClusterHeaders;
}
export declare class GetModifyDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
