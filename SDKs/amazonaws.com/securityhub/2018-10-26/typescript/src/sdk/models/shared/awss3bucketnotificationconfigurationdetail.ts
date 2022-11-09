import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsS3BucketNotificationConfigurationFilter } from "./awss3bucketnotificationconfigurationfilter";


// AwsS3BucketNotificationConfigurationDetail
/** 
 * Details for an S3 bucket notification configuration.
**/
export class AwsS3BucketNotificationConfigurationDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination?: string;

  @Metadata({ data: "json, name=Events" })
  events?: string[];

  @Metadata({ data: "json, name=Filter" })
  filter?: AwsS3BucketNotificationConfigurationFilter;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
