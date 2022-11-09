import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsS3BucketNotificationConfigurationS3KeyFilter } from "./awss3bucketnotificationconfigurations3keyfilter";


// AwsS3BucketNotificationConfigurationFilter
/** 
 * Filtering information for the notifications. The filtering is based on Amazon S3 key names.
**/
export class AwsS3BucketNotificationConfigurationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3KeyFilter" })
  s3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}
