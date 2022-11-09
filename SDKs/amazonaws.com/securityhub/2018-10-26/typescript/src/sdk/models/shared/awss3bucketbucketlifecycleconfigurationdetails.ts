import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketBucketLifecycleConfigurationRulesDetails } from "./awss3bucketbucketlifecycleconfigurationrulesdetails";


// AwsS3BucketBucketLifecycleConfigurationDetails
/** 
 * The lifecycle configuration for the objects in the S3 bucket.
**/
export class AwsS3BucketBucketLifecycleConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.AwsS3BucketBucketLifecycleConfigurationRulesDetails })
  rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}
