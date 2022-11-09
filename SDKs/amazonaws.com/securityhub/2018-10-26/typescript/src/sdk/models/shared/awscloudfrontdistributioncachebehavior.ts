import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCloudFrontDistributionCacheBehavior
/** 
 * Information about a cache behavior for the distribution.
**/
export class AwsCloudFrontDistributionCacheBehavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=ViewerProtocolPolicy" })
  viewerProtocolPolicy?: string;
}
