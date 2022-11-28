import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackingOptions
/** 
 * <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
**/
export class TrackingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomRedirectDomain" })
  customRedirectDomain: string;
}
