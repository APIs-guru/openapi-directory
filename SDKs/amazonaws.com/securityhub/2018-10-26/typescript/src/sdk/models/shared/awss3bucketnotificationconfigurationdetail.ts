import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketNotificationConfigurationFilter } from "./awss3bucketnotificationconfigurationfilter";



// AwsS3BucketNotificationConfigurationDetail
/** 
 * Details for an S3 bucket notification configuration.
**/
export class AwsS3BucketNotificationConfigurationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=Events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: AwsS3BucketNotificationConfigurationFilter;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
