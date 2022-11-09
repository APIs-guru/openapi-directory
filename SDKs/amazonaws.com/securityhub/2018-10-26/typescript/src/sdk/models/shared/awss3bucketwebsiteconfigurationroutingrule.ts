import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsS3BucketWebsiteConfigurationRoutingRuleCondition } from "./awss3bucketwebsiteconfigurationroutingrulecondition";
import { AwsS3BucketWebsiteConfigurationRoutingRuleRedirect } from "./awss3bucketwebsiteconfigurationroutingruleredirect";


// AwsS3BucketWebsiteConfigurationRoutingRule
/** 
 * A rule for redirecting requests to the website.
**/
export class AwsS3BucketWebsiteConfigurationRoutingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;

  @Metadata({ data: "json, name=Redirect" })
  redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}
