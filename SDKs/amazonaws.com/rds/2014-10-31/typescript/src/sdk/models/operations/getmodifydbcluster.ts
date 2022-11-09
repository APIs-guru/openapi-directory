import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbClusterActionEnum {
    ModifyDbCluster = "ModifyDBCluster"
}


// GetModifyDbClusterCloudwatchLogsExportConfiguration
/** 
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export class GetModifyDbClusterCloudwatchLogsExportConfiguration extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=DisableLogTypes" })
  disableLogTypes?: string[];

  @Metadata({ data: "queryParam, name=EnableLogTypes" })
  enableLogTypes?: string[];
}


// GetModifyDbClusterScalingConfiguration
/** 
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export class GetModifyDbClusterScalingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=AutoPause" })
  autoPause?: boolean;

  @Metadata({ data: "queryParam, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "queryParam, name=MinCapacity" })
  minCapacity?: number;

  @Metadata({ data: "queryParam, name=SecondsBeforeTimeout" })
  secondsBeforeTimeout?: number;

  @Metadata({ data: "queryParam, name=SecondsUntilAutoPause" })
  secondsUntilAutoPause?: number;

  @Metadata({ data: "queryParam, name=TimeoutAction" })
  timeoutAction?: string;
}

export enum GetModifyDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowMajorVersionUpgrade" })
  allowMajorVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BacktrackWindow" })
  backtrackWindow?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CloudwatchLogsExportConfiguration" })
  cloudwatchLogsExportConfiguration?: GetModifyDbClusterCloudwatchLogsExportConfiguration;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterParameterGroupName" })
  dbClusterParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceParameterGroupName" })
  dbInstanceParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" })
  deletionProtection?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainIAMRoleName" })
  domainIamRoleName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableGlobalWriteForwarding" })
  enableGlobalWriteForwarding?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableHttpEndpoint" })
  enableHttpEndpoint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableIAMDatabaseAuthentication" })
  enableIamDatabaseAuthentication?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewDBClusterIdentifier" })
  newDbClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScalingConfiguration" })
  scalingConfiguration?: GetModifyDbClusterScalingConfiguration;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbClusterVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyDbClusterHeaders extends SpeakeasyBase {
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


export class GetModifyDbClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbClusterQueryParams;

  @Metadata()
  headers: GetModifyDbClusterHeaders;
}


export class GetModifyDbClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
