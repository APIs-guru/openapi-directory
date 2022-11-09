import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbInstanceActionEnum {
    ModifyDbInstance = "ModifyDBInstance"
}


// GetModifyDbInstanceCloudwatchLogsExportConfiguration
/** 
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
**/
export class GetModifyDbInstanceCloudwatchLogsExportConfiguration extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=DisableLogTypes" })
  disableLogTypes?: string[];

  @Metadata({ data: "queryParam, name=EnableLogTypes" })
  enableLogTypes?: string[];
}

export enum GetModifyDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbInstanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbInstanceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowMajorVersionUpgrade" })
  allowMajorVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CACertificateIdentifier" })
  caCertificateIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CloudwatchLogsExportConfiguration" })
  cloudwatchLogsExportConfiguration?: GetModifyDbInstanceCloudwatchLogsExportConfiguration;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" })
  dbParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBPortNumber" })
  dbPortNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroups" })
  dbSecurityGroups?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" })
  deletionProtection?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainIAMRoleName" })
  domainIamRoleName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableIAMDatabaseAuthentication" })
  enableIamDatabaseAuthentication?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnablePerformanceInsights" })
  enablePerformanceInsights?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MonitoringInterval" })
  monitoringInterval?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MonitoringRoleArn" })
  monitoringRoleArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewDBInstanceIdentifier" })
  newDbInstanceIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PerformanceInsightsKMSKeyId" })
  performanceInsightsKmsKeyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PromotionTier" })
  promotionTier?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StorageType" })
  storageType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TdeCredentialArn" })
  tdeCredentialArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TdeCredentialPassword" })
  tdeCredentialPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbInstanceVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyDbInstanceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyDbInstanceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbInstanceQueryParams;

  @Metadata()
  headers: GetModifyDbInstanceHeaders;
}


export class GetModifyDbInstanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
