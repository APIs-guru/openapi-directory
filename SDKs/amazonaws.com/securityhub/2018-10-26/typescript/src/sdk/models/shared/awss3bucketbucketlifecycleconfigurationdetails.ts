import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesDetails } from "./awss3bucketbucketlifecycleconfigurationrulesdetails";



// AwsS3BucketBucketLifecycleConfigurationDetails
/** 
 * The lifecycle configuration for the objects in the S3 bucket.
**/
export class AwsS3BucketBucketLifecycleConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: AwsS3BucketBucketLifecycleConfigurationRulesDetails })
  rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}
