import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketNotificationConfigurationS3KeyFilterRule } from "./awss3bucketnotificationconfigurations3keyfilterrule";



// AwsS3BucketNotificationConfigurationS3KeyFilter
/** 
 * Details for an Amazon S3 filter.
**/
export class AwsS3BucketNotificationConfigurationS3KeyFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterRules", elemType: AwsS3BucketNotificationConfigurationS3KeyFilterRule })
  filterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}
