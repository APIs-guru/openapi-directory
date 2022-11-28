import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketNotificationConfigurationFilter } from "./awss3bucketnotificationconfigurationfilter";
/**
 * Details for an S3 bucket notification configuration.
**/
export declare class AwsS3BucketNotificationConfigurationDetail extends SpeakeasyBase {
    destination?: string;
    events?: string[];
    filter?: AwsS3BucketNotificationConfigurationFilter;
    type?: string;
}
