import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyDbClusterActionEnum {
    ModifyDbCluster = "ModifyDBCluster"
}


// GetModifyDbClusterCloudwatchLogsExportConfiguration
/** 
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.</p> <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export class GetModifyDbClusterCloudwatchLogsExportConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=DisableLogTypes" })
  disableLogTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, name=EnableLogTypes" })
  enableLogTypes?: string[];
}


// GetModifyDbClusterScalingConfiguration
/** 
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
export class GetModifyDbClusterScalingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=AutoPause" })
  autoPause?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=MinCapacity" })
  minCapacity?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=SecondsBeforeTimeout" })
  secondsBeforeTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=SecondsUntilAutoPause" })
  secondsUntilAutoPause?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=TimeoutAction" })
  timeoutAction?: string;
}

export enum GetModifyDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowMajorVersionUpgrade" })
  allowMajorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BacktrackWindow" })
  backtrackWindow?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CloudwatchLogsExportConfiguration" })
  cloudwatchLogsExportConfiguration?: GetModifyDbClusterCloudwatchLogsExportConfiguration;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterParameterGroupName" })
  dbClusterParameterGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceParameterGroupName" })
  dbInstanceParameterGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainIAMRoleName" })
  domainIamRoleName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableGlobalWriteForwarding" })
  enableGlobalWriteForwarding?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableHttpEndpoint" })
  enableHttpEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableIAMDatabaseAuthentication" })
  enableIamDatabaseAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" })
  masterUserPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewDBClusterIdentifier" })
  newDbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScalingConfiguration" })
  scalingConfiguration?: GetModifyDbClusterScalingConfiguration;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbClusterVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyDbClusterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyDbClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyDbClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyDbClusterHeaders;
}


export class GetModifyDbClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
