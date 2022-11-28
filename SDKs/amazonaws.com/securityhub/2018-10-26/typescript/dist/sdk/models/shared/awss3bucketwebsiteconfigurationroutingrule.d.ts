import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketWebsiteConfigurationRoutingRuleCondition } from "./awss3bucketwebsiteconfigurationroutingrulecondition";
import { AwsS3BucketWebsiteConfigurationRoutingRuleRedirect } from "./awss3bucketwebsiteconfigurationroutingruleredirect";
/**
 * A rule for redirecting requests to the website.
**/
export declare class AwsS3BucketWebsiteConfigurationRoutingRule extends SpeakeasyBase {
    condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;
    redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}
