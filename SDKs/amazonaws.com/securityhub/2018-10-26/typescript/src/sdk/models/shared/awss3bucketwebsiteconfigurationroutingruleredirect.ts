import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketWebsiteConfigurationRoutingRuleRedirect
/** 
 * The rules to redirect the request if the condition in <code>Condition</code> is met.
**/
export class AwsS3BucketWebsiteConfigurationRoutingRuleRedirect extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=HttpRedirectCode" })
  httpRedirectCode?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=ReplaceKeyPrefixWith" })
  replaceKeyPrefixWith?: string;

  @Metadata({ data: "json, name=ReplaceKeyWith" })
  replaceKeyWith?: string;
}
