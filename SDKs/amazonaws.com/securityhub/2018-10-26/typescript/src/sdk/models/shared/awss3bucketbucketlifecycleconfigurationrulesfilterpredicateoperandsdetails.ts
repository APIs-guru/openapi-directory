import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails";



// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
/** 
 * A value to use for the filter.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
