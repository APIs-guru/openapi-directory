import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterRestoreStatus
/** 
 * Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot.
**/
export class AwsRedshiftClusterRestoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentRestoreRateInMegaBytesPerSecond" })
  currentRestoreRateInMegaBytesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=ElapsedTimeInSeconds" })
  elapsedTimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=EstimatedTimeToCompletionInSeconds" })
  estimatedTimeToCompletionInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgressInMegaBytes" })
  progressInMegaBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotSizeInMegaBytes" })
  snapshotSizeInMegaBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
