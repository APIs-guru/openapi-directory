import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsPendingCloudWatchLogsExports } from "./awsrdspendingcloudwatchlogsexports";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";



// AwsRdsDbPendingModifiedValues
/** 
 * Changes to a DB instance that are currently pending.
**/
export class AwsRdsDbPendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=CaCertificateIdentifier" })
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbInstanceClass" })
  dbInstanceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbSubnetGroupName" })
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterUserPassword" })
  masterUserPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PendingCloudWatchLogsExports" })
  pendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ProcessorFeatures", elemType: AwsRdsDbProcessorFeature })
  processorFeatures?: AwsRdsDbProcessorFeature[];

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: string;
}
