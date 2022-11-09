import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterDeferredMaintenanceWindow
/** 
 * A time windows during which maintenance was deferred for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterDeferredMaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeferMaintenanceEndTime" })
  deferMaintenanceEndTime?: string;

  @Metadata({ data: "json, name=DeferMaintenanceIdentifier" })
  deferMaintenanceIdentifier?: string;

  @Metadata({ data: "json, name=DeferMaintenanceStartTime" })
  deferMaintenanceStartTime?: string;
}
