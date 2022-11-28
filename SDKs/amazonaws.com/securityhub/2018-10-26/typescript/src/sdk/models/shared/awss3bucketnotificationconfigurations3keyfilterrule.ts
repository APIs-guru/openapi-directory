import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum } from "./awss3bucketnotificationconfigurations3keyfilterrulenameenum";



// AwsS3BucketNotificationConfigurationS3KeyFilterRule
/** 
 * Details for a filter rule.
**/
export class AwsS3BucketNotificationConfigurationS3KeyFilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
