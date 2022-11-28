import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails";



// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
/** 
 * The configuration for the filter.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Operands", elemType: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails })
  operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
