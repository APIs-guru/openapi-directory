import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataTransferProgress
/** 
 * Describes the status of a cluster while it is in the process of resizing with an incremental resize.
**/
export class DataTransferProgress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentRateInMegaBytesPerSecond?: number;

  @SpeakeasyMetadata()
  dataTransferredInMegaBytes?: number;

  @SpeakeasyMetadata()
  elapsedTimeInSeconds?: number;

  @SpeakeasyMetadata()
  estimatedTimeToCompletionInSeconds?: number;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  totalDataInMegaBytes?: number;
}
