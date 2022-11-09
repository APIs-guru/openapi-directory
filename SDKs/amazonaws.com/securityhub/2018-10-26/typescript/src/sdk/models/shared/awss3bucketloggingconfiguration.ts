import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketLoggingConfiguration
/** 
 * Information about logging for the S3 bucket
**/
export class AwsS3BucketLoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationBucketName" })
  destinationBucketName?: string;

  @Metadata({ data: "json, name=LogFilePrefix" })
  logFilePrefix?: string;
}
