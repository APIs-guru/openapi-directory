import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the result of a cluster resize operation.
**/
export declare class ResizeProgressMessage extends SpeakeasyBase {
    avgResizeRateInMegaBytesPerSecond?: number;
    dataTransferProgressPercent?: number;
    elapsedTimeInSeconds?: number;
    estimatedTimeToCompletionInSeconds?: number;
    importTablesCompleted?: string[];
    importTablesInProgress?: string[];
    importTablesNotStarted?: string[];
    message?: string;
    progressInMegaBytes?: number;
    resizeType?: string;
    status?: string;
    targetClusterType?: string;
    targetEncryptionType?: string;
    targetNodeType?: string;
    targetNumberOfNodes?: number;
    totalResizeDataInMegaBytes?: number;
}
