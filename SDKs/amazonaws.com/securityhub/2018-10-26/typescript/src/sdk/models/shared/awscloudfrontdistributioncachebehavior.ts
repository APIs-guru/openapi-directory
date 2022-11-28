import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCloudFrontDistributionCacheBehavior
/** 
 * Information about a cache behavior for the distribution.
**/
export class AwsCloudFrontDistributionCacheBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ViewerProtocolPolicy" })
  viewerProtocolPolicy?: string;
}
