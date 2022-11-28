import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot.
**/
export declare class AwsRedshiftClusterRestoreStatus extends SpeakeasyBase {
    currentRestoreRateInMegaBytesPerSecond?: number;
    elapsedTimeInSeconds?: number;
    estimatedTimeToCompletionInSeconds?: number;
    progressInMegaBytes?: number;
    snapshotSizeInMegaBytes?: number;
    status?: string;
}
