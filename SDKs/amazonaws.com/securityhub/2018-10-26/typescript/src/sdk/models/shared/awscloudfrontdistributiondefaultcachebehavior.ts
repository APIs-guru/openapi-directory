import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCloudFrontDistributionDefaultCacheBehavior
/** 
 * Contains information about the default cache configuration for the distribution.
**/
export class AwsCloudFrontDistributionDefaultCacheBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ViewerProtocolPolicy" })
  viewerProtocolPolicy?: string;
}
