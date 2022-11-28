import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoggingStatus
/** 
 * Describes the status of logging for a cluster.
**/
export class LoggingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucketName?: string;

  @SpeakeasyMetadata()
  lastFailureMessage?: string;

  @SpeakeasyMetadata()
  lastFailureTime?: Date;

  @SpeakeasyMetadata()
  lastSuccessfulDeliveryTime?: Date;

  @SpeakeasyMetadata()
  loggingEnabled?: boolean;

  @SpeakeasyMetadata()
  s3KeyPrefix?: string;
}
