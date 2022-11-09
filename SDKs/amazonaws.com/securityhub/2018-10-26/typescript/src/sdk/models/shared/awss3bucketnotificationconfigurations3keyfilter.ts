import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketNotificationConfigurationS3KeyFilterRule } from "./awss3bucketnotificationconfigurations3keyfilterrule";


// AwsS3BucketNotificationConfigurationS3KeyFilter
/** 
 * Details for an Amazon S3 filter.
**/
export class AwsS3BucketNotificationConfigurationS3KeyFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterRules", elemType: shared.AwsS3BucketNotificationConfigurationS3KeyFilterRule })
  filterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}
