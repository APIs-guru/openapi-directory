import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreStatus
/** 
 * Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
**/
export class RestoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentRestoreRateInMegaBytesPerSecond?: number;

  @SpeakeasyMetadata()
  elapsedTimeInSeconds?: number;

  @SpeakeasyMetadata()
  estimatedTimeToCompletionInSeconds?: number;

  @SpeakeasyMetadata()
  progressInMegaBytes?: number;

  @SpeakeasyMetadata()
  snapshotSizeInMegaBytes?: number;

  @SpeakeasyMetadata()
  status?: string;
}
