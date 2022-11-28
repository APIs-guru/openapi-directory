import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCloudFrontDistributionOriginS3OriginConfig
/** 
 * Information about an origin that is an S3 bucket that is not configured with static website hosting.
**/
export class AwsCloudFrontDistributionOriginS3OriginConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OriginAccessIdentity" })
  originAccessIdentity?: string;
}
