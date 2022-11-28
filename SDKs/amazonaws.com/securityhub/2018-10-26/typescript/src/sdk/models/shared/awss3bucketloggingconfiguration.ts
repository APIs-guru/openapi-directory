import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketLoggingConfiguration
/** 
 * Information about logging for the S3 bucket
**/
export class AwsS3BucketLoggingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationBucketName" })
  destinationBucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=LogFilePrefix" })
  logFilePrefix?: string;
}
