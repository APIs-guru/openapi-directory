import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketNotificationConfigurationDetail } from "./awss3bucketnotificationconfigurationdetail";


// AwsS3BucketNotificationConfiguration
/** 
 * The notification configuration for the S3 bucket.
**/
export class AwsS3BucketNotificationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configurations", elemType: shared.AwsS3BucketNotificationConfigurationDetail })
  configurations?: AwsS3BucketNotificationConfigurationDetail[];
}
