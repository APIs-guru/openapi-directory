import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterDeferredMaintenanceWindow
/** 
 * A time windows during which maintenance was deferred for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterDeferredMaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeferMaintenanceEndTime" })
  deferMaintenanceEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DeferMaintenanceIdentifier" })
  deferMaintenanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DeferMaintenanceStartTime" })
  deferMaintenanceStartTime?: string;
}
