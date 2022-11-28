import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
/** 
 * A transition rule that describes when noncurrent objects transition to a specified storage class.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Days" })
  days?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}
