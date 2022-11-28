import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketWebsiteConfigurationRoutingRuleRedirect
/** 
 * The rules to redirect the request if the condition in <code>Condition</code> is met.
**/
export class AwsS3BucketWebsiteConfigurationRoutingRuleRedirect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpRedirectCode" })
  httpRedirectCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplaceKeyPrefixWith" })
  replaceKeyPrefixWith?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplaceKeyWith" })
  replaceKeyWith?: string;
}
