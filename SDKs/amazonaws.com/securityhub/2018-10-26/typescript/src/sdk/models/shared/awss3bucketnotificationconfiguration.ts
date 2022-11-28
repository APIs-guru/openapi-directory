import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketNotificationConfigurationDetail } from "./awss3bucketnotificationconfigurationdetail";



// AwsS3BucketNotificationConfiguration
/** 
 * The notification configuration for the S3 bucket.
**/
export class AwsS3BucketNotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: AwsS3BucketNotificationConfigurationDetail })
  configurations?: AwsS3BucketNotificationConfigurationDetail[];
}
