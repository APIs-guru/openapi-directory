import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicatedetails";



// AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
/** 
 * Identifies the objects that a rule applies to.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Predicate" })
  predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}
