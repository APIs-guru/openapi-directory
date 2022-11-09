import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketWebsiteConfigurationRoutingRuleCondition
/** 
 * The condition that must be met in order to apply the routing rule.
**/
export class AwsS3BucketWebsiteConfigurationRoutingRuleCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=HttpErrorCodeReturnedEquals" })
  httpErrorCodeReturnedEquals?: string;

  @Metadata({ data: "json, name=KeyPrefixEquals" })
  keyPrefixEquals?: string;
}
