import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketWebsiteConfigurationRedirectTo
/** 
 * The redirect behavior for requests to the website.
**/
export class AwsS3BucketWebsiteConfigurationRedirectTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;
}
