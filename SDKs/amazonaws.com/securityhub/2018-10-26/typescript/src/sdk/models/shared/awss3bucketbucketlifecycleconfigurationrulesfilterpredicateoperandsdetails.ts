import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails";


// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
/** 
 * A value to use for the filter.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=Tag" })
  tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
