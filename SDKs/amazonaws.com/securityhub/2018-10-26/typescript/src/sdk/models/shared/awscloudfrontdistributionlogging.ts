import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCloudFrontDistributionLogging
/** 
 * A complex type that controls whether access logs are written for the distribution.
**/
export class AwsCloudFrontDistributionLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=IncludeCookies" })
  includeCookies?: boolean;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;
}
