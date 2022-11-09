import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails";


// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
/** 
 * The configuration for the filter.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Operands", elemType: shared.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails })
  operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=Tag" })
  tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
