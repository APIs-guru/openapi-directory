import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingCloudwatchLogsExports } from "./pendingcloudwatchlogsexports";



// ClusterPendingModifiedValues
/** 
 * This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
**/
export class ClusterPendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  masterUserPassword?: string;

  @SpeakeasyMetadata()
  pendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}
