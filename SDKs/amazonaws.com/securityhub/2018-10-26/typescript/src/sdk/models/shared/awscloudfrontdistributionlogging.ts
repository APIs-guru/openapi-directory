import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCloudFrontDistributionLogging
/** 
 * A complex type that controls whether access logs are written for the distribution.
**/
export class AwsCloudFrontDistributionLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeCookies" })
  includeCookies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;
}
