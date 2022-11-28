import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketWebsiteConfigurationRoutingRuleCondition
/** 
 * The condition that must be met in order to apply the routing rule.
**/
export class AwsS3BucketWebsiteConfigurationRoutingRuleCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HttpErrorCodeReturnedEquals" })
  httpErrorCodeReturnedEquals?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyPrefixEquals" })
  keyPrefixEquals?: string;
}
