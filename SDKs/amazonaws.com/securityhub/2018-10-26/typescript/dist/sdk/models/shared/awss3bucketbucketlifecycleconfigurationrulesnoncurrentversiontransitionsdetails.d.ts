import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transition rule that describes when noncurrent objects transition to a specified storage class.
**/
export declare class AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails extends SpeakeasyBase {
    days?: number;
    storageClass?: string;
}
