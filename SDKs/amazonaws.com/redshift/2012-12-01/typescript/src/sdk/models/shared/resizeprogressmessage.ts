import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResizeProgressMessage
/** 
 * Describes the result of a cluster resize operation.
**/
export class ResizeProgressMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  avgResizeRateInMegaBytesPerSecond?: number;

  @SpeakeasyMetadata()
  dataTransferProgressPercent?: number;

  @SpeakeasyMetadata()
  elapsedTimeInSeconds?: number;

  @SpeakeasyMetadata()
  estimatedTimeToCompletionInSeconds?: number;

  @SpeakeasyMetadata()
  importTablesCompleted?: string[];

  @SpeakeasyMetadata()
  importTablesInProgress?: string[];

  @SpeakeasyMetadata()
  importTablesNotStarted?: string[];

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  progressInMegaBytes?: number;

  @SpeakeasyMetadata()
  resizeType?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  targetClusterType?: string;

  @SpeakeasyMetadata()
  targetEncryptionType?: string;

  @SpeakeasyMetadata()
  targetNodeType?: string;

  @SpeakeasyMetadata()
  targetNumberOfNodes?: number;

  @SpeakeasyMetadata()
  totalResizeDataInMegaBytes?: number;
}
