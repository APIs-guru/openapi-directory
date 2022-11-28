import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of a cluster while it is in the process of resizing with an incremental resize.
**/
export declare class DataTransferProgress extends SpeakeasyBase {
    currentRateInMegaBytesPerSecond?: number;
    dataTransferredInMegaBytes?: number;
    elapsedTimeInSeconds?: number;
    estimatedTimeToCompletionInSeconds?: number;
    status?: string;
    totalDataInMegaBytes?: number;
}
