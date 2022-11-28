import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
**/
export declare class RestoreStatus extends SpeakeasyBase {
    currentRestoreRateInMegaBytesPerSecond?: number;
    elapsedTimeInSeconds?: number;
    estimatedTimeToCompletionInSeconds?: number;
    progressInMegaBytes?: number;
    snapshotSizeInMegaBytes?: number;
    status?: string;
}
