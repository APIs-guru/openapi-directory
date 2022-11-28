import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails";
/**
 * The configuration for the filter.
**/
export declare class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails extends SpeakeasyBase {
    operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];
    prefix?: string;
    tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;
    type?: string;
}
