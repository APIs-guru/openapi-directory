import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsRdsPendingCloudWatchLogsExports } from "./awsrdspendingcloudwatchlogsexports";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";


// AwsRdsDbPendingModifiedValues
/** 
 * Changes to a DB instance that are currently pending.
**/
export class AwsRdsDbPendingModifiedValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "json, name=CaCertificateIdentifier" })
  caCertificateIdentifier?: string;

  @Metadata({ data: "json, name=DbInstanceClass" })
  dbInstanceClass?: string;

  @Metadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @Metadata({ data: "json, name=DbSubnetGroupName" })
  dbSubnetGroupName?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "json, name=MasterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=PendingCloudWatchLogsExports" })
  pendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=ProcessorFeatures", elemType: shared.AwsRdsDbProcessorFeature })
  processorFeatures?: AwsRdsDbProcessorFeature[];

  @Metadata({ data: "json, name=StorageType" })
  storageType?: string;
}
