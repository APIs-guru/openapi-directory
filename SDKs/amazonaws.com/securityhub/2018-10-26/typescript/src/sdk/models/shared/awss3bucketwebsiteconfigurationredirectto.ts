import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketWebsiteConfigurationRedirectTo
/** 
 * The redirect behavior for requests to the website.
**/
export class AwsS3BucketWebsiteConfigurationRedirectTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;
}
