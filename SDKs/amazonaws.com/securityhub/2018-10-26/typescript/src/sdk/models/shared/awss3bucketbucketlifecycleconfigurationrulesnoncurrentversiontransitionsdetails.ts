import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
/** 
 * A transition rule that describes when noncurrent objects transition to a specified storage class.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Days" })
  days?: number;

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}
