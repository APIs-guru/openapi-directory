import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time windows during which maintenance was deferred for an Amazon Redshift cluster.
**/
export declare class AwsRedshiftClusterDeferredMaintenanceWindow extends SpeakeasyBase {
    deferMaintenanceEndTime?: string;
    deferMaintenanceIdentifier?: string;
    deferMaintenanceStartTime?: string;
}
