import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";



// PendingModifiedValues
/** 
 *  This data type is used as a response element in the <a>ModifyDBInstance</a> action.
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

  @SpeakeasyMetadata()
  storageType?: string;
}
