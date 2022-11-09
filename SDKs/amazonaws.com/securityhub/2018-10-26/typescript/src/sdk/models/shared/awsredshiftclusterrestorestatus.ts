import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterRestoreStatus
/** 
 * Information about the status of a cluster restore action. It only applies if the cluster was created by restoring a snapshot.
**/
export class AwsRedshiftClusterRestoreStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentRestoreRateInMegaBytesPerSecond" })
  currentRestoreRateInMegaBytesPerSecond?: number;

  @Metadata({ data: "json, name=ElapsedTimeInSeconds" })
  elapsedTimeInSeconds?: number;

  @Metadata({ data: "json, name=EstimatedTimeToCompletionInSeconds" })
  estimatedTimeToCompletionInSeconds?: number;

  @Metadata({ data: "json, name=ProgressInMegaBytes" })
  progressInMegaBytes?: number;

  @Metadata({ data: "json, name=SnapshotSizeInMegaBytes" })
  snapshotSizeInMegaBytes?: number;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
