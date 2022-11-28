import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";
import { ProcessorFeature } from "./processorfeature";



// PendingModifiedValues
/** 
 *  This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window. 
**/
export class PendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  masterUserPassword?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: ProcessorFeature })
  processorFeatures?: ProcessorFeature[];

  @SpeakeasyMetadata()
  storageType?: string;
}
