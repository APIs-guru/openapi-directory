import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketWebsiteConfigurationRoutingRuleCondition } from "./awss3bucketwebsiteconfigurationroutingrulecondition";
import { AwsS3BucketWebsiteConfigurationRoutingRuleRedirect } from "./awss3bucketwebsiteconfigurationroutingruleredirect";



// AwsS3BucketWebsiteConfigurationRoutingRule
/** 
 * A rule for redirecting requests to the website.
**/
export class AwsS3BucketWebsiteConfigurationRoutingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;

  @SpeakeasyMetadata({ data: "json, name=Redirect" })
  redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}
