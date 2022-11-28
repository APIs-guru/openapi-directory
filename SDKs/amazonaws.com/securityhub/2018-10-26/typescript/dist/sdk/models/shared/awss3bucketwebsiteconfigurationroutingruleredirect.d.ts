import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rules to redirect the request if the condition in <code>Condition</code> is met.
**/
export declare class AwsS3BucketWebsiteConfigurationRoutingRuleRedirect extends SpeakeasyBase {
    hostname?: string;
    httpRedirectCode?: string;
    protocol?: string;
    replaceKeyPrefixWith?: string;
    replaceKeyWith?: string;
}
