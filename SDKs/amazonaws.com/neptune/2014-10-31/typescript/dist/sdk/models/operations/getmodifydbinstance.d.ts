import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbInstanceActionEnum {
    ModifyDbInstance = "ModifyDBInstance"
}
/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
**/
export declare class GetModifyDbInstanceCloudwatchLogsExportConfiguration extends SpeakeasyBase {
    disableLogTypes?: string[];
    enableLogTypes?: string[];
}
export declare enum GetModifyDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbInstanceQueryParams extends SpeakeasyBase {
    action: GetModifyDbInstanceActionEnum;
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    backupRetentionPeriod?: number;
    caCertificateIdentifier?: string;
    cloudwatchLogsExportConfiguration?: GetModifyDbInstanceCloudwatchLogsExportConfiguration;
    copyTagsToSnapshot?: boolean;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbParameterGroupName?: string;
    dbPortNumber?: number;
    dbSecurityGroups?: string[];
    dbSubnetGroupName?: string;
    deletionProtection?: boolean;
    domain?: string;
    domainIamRoleName?: string;
    enableIamDatabaseAuthentication?: boolean;
    enablePerformanceInsights?: boolean;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword?: string;
    monitoringInterval?: number;
    monitoringRoleArn?: string;
    multiAz?: boolean;
    newDbInstanceIdentifier?: string;
    optionGroupName?: string;
    performanceInsightsKmsKeyId?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    promotionTier?: number;
    publiclyAccessible?: boolean;
    storageType?: string;
    tdeCredentialArn?: string;
    tdeCredentialPassword?: string;
    version: GetModifyDbInstanceVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbInstanceRequest extends SpeakeasyBase {
    queryParams: GetModifyDbInstanceQueryParams;
    headers: GetModifyDbInstanceHeaders;
}
export declare class GetModifyDbInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
